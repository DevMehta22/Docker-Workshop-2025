import Navbar from "./Components/Navbar";
import CreateBook from "./Components/CreateBook";
import ReadBook from "./Components/ReadBook";
import UpdateBook from "./Components/UpdateBook";

import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/add" element={<CreateBook/>}></Route>
      <Route exact path="/all" element={<ReadBook/>}></Route>
      <Route exact path="/:id" element={<UpdateBook/>}></Route>
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
