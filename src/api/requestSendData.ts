export interface SendData {
    fio: string;
    phone: string;
    region: string;
    message: string;
}
export default ({ fio, phone, region, message }: SendData) => {
  return fetch("https://formcarry.com/s/bDCcHG0G3Wx", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       Accept: "application/json"
    },
    body: JSON.stringify({ fio, phone, region, message }),
  });
}
