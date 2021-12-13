import React from 'react'
/**components**/
import Footer from '../components/footer'
import Header from '../components/header'
/**css**/
import '../style/main.css'
/**assets**/
import movie from '../assets/img/movie1.mp4'
import google_icon from '../assets/img/google.png'
import github_icon from '../assets/img/github.png'

const Signin = ({ authService }) => {
  const signin_with_social = (event) => {
    authService.login(event.currentTarget.name)
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
