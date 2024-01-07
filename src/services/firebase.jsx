import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy
}
    from 'firebase/firestore';

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

async function sendMessage(roomId, user, uid, text) {
    try {
        await addDoc(collection(db, 'chat-rooms', roomId, 'messages'), {
            uid: uid,
            displayName: user,
            text: text.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.error(error);
    }
}

function getMessages(roomId, callback){
    return onSnapshot(
        query(
            collection(db, 'chat-rooms', roomId, 'messages'),
            orderBy('timestamp', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc)=> (
                {
                    id: doc.id,
                    ...doc.data(),
                }
            ));
            callback(messages);
        }
    );
}

export { loginWithGoogle, sendMessage , getMessages};
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider;
const db = getFirestore(app);
export default app;