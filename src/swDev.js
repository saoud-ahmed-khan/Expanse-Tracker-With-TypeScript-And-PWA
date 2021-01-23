export default function swDev()
{
    let swURL= `${process.env.PUBLIC_URL}/sw.js`
    if('serviceWorker' in navigator)
    {navigator.serviceWorker.register(swURL).then((res)=>{console.log("response",res)})}
}