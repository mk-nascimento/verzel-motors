import { Route, Routes } from "react-router-dom";
import { Authenticated } from "./components/Authenticated";
import { UnAuthenticated } from "./components/UnAuthenticated";
import Pathnames from "./enums/Pathnames";
import Homepage from "./pages/Homepage";
import Session from "./pages/Session";

function App() {
  return (
    <Routes>
      <Route path={Pathnames.Homepage} element={<Authenticated />}>
        <Route index element={<Homepage />} />
      </Route>
      <Route path={Pathnames.Session} element={<UnAuthenticated />}>
        <Route index element={<Session />} />
      </Route>
    </Routes>
  );
}

export default App;
