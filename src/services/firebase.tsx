import firebase from 'firebase'

export const initWithFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyA8-7y3o8AbXun5v2oVyjgSX49VCzkQuLs",
        authDomain: "expensetrackerpwa-8105f.firebaseapp.com",
        projectId: "expensetrackerpwa-8105f",
        storageBucket: "expensetrackerpwa-8105f.appspot.com",
        messagingSenderId: "776750821458",
        appId: "1:776750821458:web:28f08e17e34dea34362f8b"
      };
      
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
}

export const askForPermissioToReceiveNotifications = async () => {
    if (!firebase.apps.length) {
        initWithFirebase();
    }
    try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('token :', token);
        return token;
    } catch (error) {
        console.error(error);
    }
}