export interface SendData {
    fio: string;
    phone: string;
    region: string;
    message: string;
}
export default ({ fio, phone, region, message }: SendData) => {
  return fetch("https://formcarry.com/s/493WjuAKEOf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fio, phone, region, message }),
  });
}
