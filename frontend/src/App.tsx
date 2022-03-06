import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./globalStyles";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
