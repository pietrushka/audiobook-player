import {Auth} from 'aws-amplify'


function App() {
  const checkUser = async () => {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user:', user)
  }
  return (
    <div className="App">
      <button
        onClick={() => Auth.federatedSignIn({provider: 'Google'})}
      >
        Sign in with Google
      </button>
      <button
        onClick={checkUser}
      >
        Check user
      </button>
    </div>
  );
}

export default App;
