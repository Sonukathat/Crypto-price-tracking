import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Login } from "./component/Login";
import { Main } from "./component/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from "./component/Signup";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <Login/>
        }/>
        <Route path="/signup" element={
          <Signup/>
        }/>
      </Routes>
    </BrowserRouter>
    /*  
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
    */
  )
}

export default App;
