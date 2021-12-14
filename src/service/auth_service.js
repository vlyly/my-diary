import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  signInWithPopup,
} from 'firebase/auth'
import firebaseConfig from './firebase'

class AuthService {
  login(providerName) {
    initializeApp(firebaseConfig)
    const auth = getAuth()
    let provider
    if (providerName === 'google') {
      provider = new GoogleAuthProvider()
    }
    if (providerName === 'github') {
      provider = new GithubAuthProvider()
    }

    return signInWithPopup(auth, provider)
  }

  logout() {
    initializeApp(firebaseConfig)

    return signOut(getAuth())
  }

  auth() {
    initializeApp(firebaseConfig)

    return getAuth()
  }
}

export default AuthService
