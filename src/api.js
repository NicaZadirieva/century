export function get_promises({fio, telephone, region,message}) {
    return fetch("https://formcarry.com/s/493WjuAKEOf",{
        method:'POST',
        headers: {
         'Content-Type': 'application/json',
     
        },
        body: JSON.stringify({ fio, telephone, region, message })
      });
}