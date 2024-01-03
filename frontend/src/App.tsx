import { Route, Routes } from "react-router-dom";
import { Authenticated } from "./components/Authenticated";
import Pathnames from "./enums/Pathnames";
import Homepage from "./pages/Homepage";
import Session from "./pages/Session";

function App() {
  return (
    <Routes>
      <Route path={Pathnames.Homepage} element={<Authenticated />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path={Pathnames.Session} element={<Session />} />
    </Routes>
  );
}

export default App;
