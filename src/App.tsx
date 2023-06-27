import './App.scss'
import Container from "./components/Container/Container.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import AppRouter from "./components/AppRouter.tsx";
import Wrapper from "./components/Wrapper/Wrapper.tsx";
import {useContext} from "react";
import {AppContext} from "./main.tsx";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader/Loader.tsx";

function App() {
  const { auth } = useContext(AppContext)
  const [ user, loading ] = useAuthState(auth)

  return (
    <Wrapper>
      <Navbar/>
      <Container>
        {
          loading ?
            <Loader/>
            :
            <AppRouter/>
        }
      </Container>
    </Wrapper>
  )
}

export default App
