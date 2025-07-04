import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Welcome from "./pages/Welcome.jsx";
import AuthPage from "./pages/LoginRegister.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
