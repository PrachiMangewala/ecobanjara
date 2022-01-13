import firebase from "../config/firebase-config";


const socialMediaAuth = (provider) =>{
    return firebase.auth().signInWithPopup(provider).then((res) => {
        console.log(res)
        return res;
    }).catch((error) => {
        return error;
    })
};

export default socialMediaAuth;