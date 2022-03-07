import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ProtectedLayout } from "./components/ProtectedLayout";
import { GlobalStyles } from "./globalStyles";
import { Home } from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
            path="/home"
            element={
              <ProtectedLayout>
                <Home />
              </ProtectedLayout>
            }
          ></Route>
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
