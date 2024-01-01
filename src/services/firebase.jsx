import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9VWEffag8iY_tPnJzCVBwbBn7Ngdh8nw",
    authDomain: "chatroom-4cedc.firebaseapp.com",
    projectId: "chatroom-4cedc",
    storageBucket: "chatroom-4cedc.appspot.com",
    messagingSenderId: "318300139136",
    appId: "1:318300139136:web:7fea5d44755c0400f94065",
    measurementId: "G-PF0B0677YK"
};
async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

export { loginWithGoogle };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);