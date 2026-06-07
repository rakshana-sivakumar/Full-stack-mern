import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Counter from "./pages/Counter"
import Home from "./pages/Home"
import Parent from "./pages/Parent"
import Service from "./pages/Service"

const App = ()=>{
  return (
    <>
    <h1> Hellow world!!</h1>
    <h1> Hellow world!!</h1>
    <Parent/>
    <Home/>
    <About/>
    <Contact/>
    <Service/>
    <Navbar/>
    <Counter/>

    </>
  )
}

export default App