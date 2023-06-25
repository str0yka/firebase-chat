import './App.scss'
import Container from "./components/Container/Container.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import AppRouter from "./components/AppRouter.tsx";

function App() {

  return (
    <Container>
      <Navbar/>
      <AppRouter/>
    </Container>
  )
}

export default App
