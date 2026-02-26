import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FairsListingPage from "./pages/FairsListingPage";
import LoginPage from "./pages/LoginPage";
import LobbyPage from "./pages/LobbyPage";
import BoothPage from "./pages/BoothPage";
import FairDetailsPage from "./pages/FairDetailsPage";
import UserDashboardPage from "./pages/UserDashboardPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/fairs" element={<FairsListingPage />} />
      <Route path="/dashboard" element={<UserDashboardPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/lobby" element={<LobbyPage />} />
      <Route path="/booth" element={<BoothPage />} />
      <Route path="/fair-details" element={<FairDetailsPage />} />
    </Routes>
  );
}

export default App;