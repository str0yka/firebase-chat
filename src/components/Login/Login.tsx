import classes from './Login.module.scss'
import {useContext} from "react";
import {AppContext} from "../../main.tsx";
import firebase from "firebase/compat/app";

const Login = () => {
  const { auth } = useContext(AppContext)

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    await auth.signInWithPopup(provider)
  }

  return (
    <div className={classes.loginPage}>
      <div className={classes.welcome}>
        <img src="./images/welcome-ilustration.png" alt="Welcome to FireBase Chat" draggable={false}/>
        <h1>Welcome to us!</h1>
        <span>FireBase Chat it's a place where you can connect with people from all over the world!</span>
      </div>

      <button className={classes.loginButton} onClick={login}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 12.2757C24 11.46 23.9326 10.6399 23.7886 9.83746H12.2416V14.4583H18.8541C18.5797 15.9485 17.698 17.2669 16.407 18.1046V21.1029H20.3519C22.6686 19.0129 24 15.9266 24 12.2757Z"
            fill="#4285F4"/>
          <path
            d="M12.2416 24C15.5433 24 18.3277 22.9373 20.3564 21.1032L16.4114 18.1048C15.3139 18.8368 13.8969 19.2513 12.2461 19.2513C9.05231 19.2513 6.34435 17.1392 5.37274 14.2998H1.30182V17.3906C3.38001 21.4426 7.61286 24 12.2416 24Z"
            fill="#34A853"/>
          <path
            d="M5.36866 14.2995C4.85587 12.8092 4.85587 11.1954 5.36866 9.70513V6.61432H1.30224C-0.434081 10.005 -0.434081 13.9996 1.30224 17.3903L5.36866 14.2995Z"
            fill="#FBBC04"/>
          <path
            d="M12.2416 4.74946C13.9869 4.72302 15.6737 5.36674 16.9377 6.5484L20.4329 3.12249C18.2198 1.08546 15.2824 -0.0344645 12.2416 0.00080863C7.61286 0.00080863 3.38001 2.55811 1.30182 6.61453L5.36824 9.70535C6.33537 6.86145 9.04781 4.74946 12.2416 4.74946Z"
            fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>
    </div>
  );
};

export default Login;