import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Footer from "./Components/Footer";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/:id" element={<DetailPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
