import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FairsListingPage from "./pages/FairsListingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/fairs" element={<FairsListingPage />} />
    </Routes>
  );
}

export default App;