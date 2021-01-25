export default function swDev(){

    let swUrl = `${process.env.PUBLIC_URL}/serviceWorker.ts`
    navigator.serviceWorker.register(swUrl).then((result) => console.log(result) )
  }