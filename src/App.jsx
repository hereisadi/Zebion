import { Routes, Route } from "react-router-dom";

import { Home, Error } from "./Pages";
import Work from "./Pages/Work/Work";
import ParkDetail from "./Pages/Work/ParkDetail";
import Wsancdetail from "./Pages/Work/Wsancdetail";
import Ramsarmore from "./Pages/Work/Ramsarmore";

// import { Navbar, Footer } from "./Components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/nationalpark/:id" element={<ParkDetail />} />
      <Route path="/wildlife sancuary/:id" element={<Wsancdetail />} />
      <Route path="/ramsar sites/:id" element={<Ramsarmore />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
