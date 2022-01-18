import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC9A4of2KnsTmcJ64c8m_IAzhsOMixUo-M",
  authDomain: "eshopdata-f7b4a.firebaseapp.com",
  projectId: "eshopdata-f7b4a",
  storageBucket: "eshopdata-f7b4a.appspot.com",
  messagingSenderId: "864269822705",
  appId: "1:864269822705:web:970d2b9b47280a68e55750",
  measurementId: "G-THNMYVRDND",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export const signin = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log({ token, user });
      return { token, user };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      return { errorCode, errorMessage, email, credential };
    });
