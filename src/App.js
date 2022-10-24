import FavoritesPage from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import RoundResultsPage from "./pages/RoundResults";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RoundResultsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
