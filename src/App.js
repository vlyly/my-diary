import Signin from './routes/sigin'

function App({ authService }) {
  return (
    <div className="App">
      <Signin authService={authService} />
    </div>
  )
}

export default App
