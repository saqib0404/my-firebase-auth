import './App.css';
import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth'
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const [user, setUser] = useState({})
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const faceBookProvider = new FacebookAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch(err => console.error('error ', err))
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch(err => console.error('error: ', err))
  }

  const handleTwitterSignIn = () => {
    signInWithPopup(auth, twitterProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch(err => console.log('error: ', err))
  }

  const handleFaceBookSignIn = () => {
    signInWithPopup(auth, faceBookProvider)
      .then(result => {
        setUser(result.user)
        console.log(result.user);
      })
      .catch(err => console.log("error: ", err))
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }

  return (
    <div className="App">
      {
        user.displayName ?
          <button onClick={handleSignOut}>Sign Out</button>
          :
          <>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
            <button onClick={handleGithubSignIn}>Github Sign In</button>
            <button onClick={handleTwitterSignIn}>Twitter Sign In</button>
            <button onClick={handleFaceBookSignIn}>Facebook Sign In</button>
          </>
      }
      {user.displayName && <div>
        <h4>Name: {user.displayName}</h4>
        <p>Email: {user.email}</p>
        <img src={user.photoURL} alt="" />
      </div>}
    </div>
  );
}

export default App;
