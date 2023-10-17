import { BrowserRouter as Router, Routes, Route, Link}  from "react-router-dom"
import Contact from "./componets/pages/Contact"
import Home from "./componets/pages/Home"
import NewProject from "./componets/pages/NewProject"
import Company from "./componets/pages/Company"
import Container from "./componets/layout/Container"
import Footer from "./componets/layout/Footer"
import Navbar from "./componets/layout/Navbar"



function App() {
  return (
      <Router>
          <Navbar/> 
          
            <Container customClass="min-height">
            <Routes>
               
                <Route  path='/' element={<Home/>}></Route>
                <Route  path="/company" element={<Company/>}></Route>
                <Route  path="/contact" element={<Contact/>}></Route>
                <Route  path="/newproject" element={<NewProject/>}></Route> 
            </Routes>
           
               </Container>
               <Footer/>
       </Router>   
               
  )
}

export default App
