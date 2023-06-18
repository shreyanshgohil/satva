import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Global";
import { Home, Login, Register } from "./pages";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default App;
