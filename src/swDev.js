export default function swDev()
{
    let swURL= `${process.env.PUBLIC_URL}/sw.js`
    if('serviceWorker' in navigator)
    {navigator.serviceWorker.register(swURL).then((res)=>{console.log("response",res)})}
}









// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.2.4/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>