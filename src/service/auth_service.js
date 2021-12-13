import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
} from 'firebase/auth'
import firebaseConfig from './firebase'

class AuthService {
  login(providerName) {
    initializeApp(firebaseConfig)
    let provider
    const auth = getAuth()
    if (providerName === 'google') {
      provider = new GoogleAuthProvider()
    }
    if (providerName === 'github') {
      provider = new GithubAuthProvider()
    }

    return signInWithRedirect(auth, provider)
  }
}

export default AuthService
