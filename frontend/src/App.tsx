import { Route, Routes } from "react-router-dom";
import Pathnames from "./enums/Pathnames";
import Homepage from "./pages/Homepage";
import Session from "./pages/Session";

function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path={Pathnames.Session} element={<Session />} />
    </Routes>
  );
}

export default App;
