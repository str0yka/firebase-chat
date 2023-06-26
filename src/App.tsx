import './App.scss'
import Container from "./components/Container/Container.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import AppRouter from "./components/AppRouter.tsx";
import Wrapper from "./components/Wrapper/Wrapper.tsx";

function App() {
  return (
    <Wrapper>
      <Navbar/>
      <Container>
        <AppRouter/>
      </Container>
    </Wrapper>
  )
}

export default App
