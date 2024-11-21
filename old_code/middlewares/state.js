import { applyMiddleware, createStore } from "redux";
import promisesMiddleWare from "./middlewares/promises";
let TOP = 35;
let initialState = {
  current: "index",
  current_fio: window.localStorage.getItem("fio") || "",
  current_telephone: window.localStorage.getItem("telephone") || "",
  current_region: window.localStorage.getItem("region") || "",
  current_message: window.localStorage.getItem("message") || "",
  opened: false,
  openedMenu: false,
};
function reducer(state, action) {
  function animate({ duration, draw, timing }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;

      if (timeFraction > 1) timeFraction = 1;

      let progress = timing(timeFraction);

      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
  console.log(action.type);
  switch (action.type) {
    case "HIDING_FORM": {
      let opened, current;
      let { popup } = action.payload;
      animate({
        duration: 1000,
        timing: function (timeFraction) {
          return timeFraction;
        },
        draw: function (progress) {
          popup.style.top = Math.min((1 - progress) * 100, TOP) + "%";
          if (progress == 1) {
            document.querySelector(".popup-container").style.display = "none";
            document.body.style.overflow = "auto";
          }
        },
      });
      opened = false;

      current = "index";
      window.history.back();
      return { ...state, ...{ opened, current } };
    }
    case "CHANGING_FIELD": {
      let { fio, phone, region, message } = action.payload;
      if (state.current_fio !== fio) window.localStorage.setItem("fio", fio);
      if (state.current_telephone !== phone)
        window.localStorage.setItem("telephone", phone);
      if (state.current_region !== region)
        window.localStorage.setItem("region", region);
      if (state.current_message !== message)
        window.localStorage.setItem("message", message);
      return {
        ...state,
        ...{
          current_fio: fio,
          current_telephone: phone,
          current_region: region,
          current_message: message,
        },
      };
    }
    case "SHOWING_FORM": {
      let opened, current;
      let { popup } = action.payload;

      animate({
        duration: 1000,
        timing: function (timeFraction) {
          return timeFraction;
        },
        draw: function (progress) {
          popup.style.top = Math.min(progress * 100, TOP) + "%";
        },
      });
      opened = true;

      document.querySelector(".popup-container").style.display = "block";
      current = "contact";
      document.body.style.overflow = "hidden";
      /**TODO: подумать как перевести на react-router-dom */
      window.history.pushState(1, "title", "./contact");
      return { ...state, ...{ opened, current } };
    }
    case "SENDING": {
      document.querySelector(".cssload-thecube").style.display = "block";
      document.querySelector(".btn-contact").disabled = true;
      return state;
    }
    case "SUCCESS": {
      let current_fio, current_telephone, current_region, current_message;
      window.localStorage.removeItem("fio");
      window.localStorage.removeItem("telephone");
      window.localStorage.removeItem("region");
      window.localStorage.removeItem("message");
      current_fio = "";
      current_telephone = "";
      current_region = "";
      current_message = "";
      document.querySelector(".cssload-thecube").style.display = "none";
      document.querySelector(".btn-contact").disabled = false;

      return {
        ...state,
        ...{ current_fio, current_telephone, current_region, current_message },
      };
    }
    case "FAILURE":
      {
        document.querySelector(".cssload-thecube").style.display = "none";
        document.querySelector(".btn-contact").disabled = false;
      }
      console.log(action.type);
      return state;
    default:
      return state;
  }
}
const createStoreWithMiddleWare =
  applyMiddleware(promisesMiddleWare)(createStore);
const store = createStoreWithMiddleWare(reducer, initialState);
export default store;
