import React from 'react'
/**components**/
import Footer from '../components/footer'
import Header from '../components/header'
/**firease**/
import { signInWithRedirect } from '@firebase/auth'
import { initializeApp } from '@firebase/app'
import { getAuth } from '@firebase/auth'
import { GoogleAuthProvider } from '@firebase/auth'
import { GithubAuthProvider } from 'firebase/auth'
/**css**/
import '../style/main.css'
/**assets**/
import movie from '../assets/img/movie1.mp4'
import google_icon from '../assets/img/google.png'
import github_icon from '../assets/img/github.png'

const firebaseConfig = {
  apiKey: 'AIzaSyA_hlExouAbl5KCHDlYFbV0reEFrHOcn0A',
  authDomain: 'my-diary-c2a62.firebaseapp.com',
  projectId: 'my-diary-c2a62',
  storageBucket: 'my-diary-c2a62.appspot.com',
  messagingSenderId: '1086490263118',
  appId: '1:1086490263118:web:271fed5c37b968bfb34d1f',
  measurementId: 'G-9C2HL75KF9',
}

const Signin = () => {
  const signin_with_social = async (event) => {
    initializeApp(firebaseConfig) /**초기화**/
    const auth = getAuth()
    let provider
    if (event.currentTarget.name === 'google') {
      provider = new GoogleAuthProvider()
    }
    if (event.currentTarget.name === 'github') {
      provider = new GithubAuthProvider()
    }
    await signInWithRedirect(auth, provider)
  }
  return (
    <div className="sign-in-wrapper">
      <video className="bg-movie" autoPlay loop muted>
        <source src={movie} type="video/mp4" />
      </video>
      <div className="sign-in-container">
        <Header />
        <p className="sign-in-comment">로그인 해주세요.</p>
        <div className="button-container">
          <button
            className="sign-in-button"
            type="button"
            title="구글로 로그인하기"
            aria-label="구글로 로그인하기"
            onClick={signin_with_social}
            name="google"
          >
            <img className="sign-in-icon" src={google_icon} alt="google" />
          </button>
          <button
            className="sign-in-button"
            type="button"
            title="깃허브로 로그인하기"
            aria-label="깃허브로 로그인하기"
            onClick={signin_with_social}
            name="github"
          >
            <img className="sign-in-icon" src={github_icon} alt="github" />
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Signin
