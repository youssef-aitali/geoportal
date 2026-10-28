import Navbar from "./components/Navbar";
import Mapview from "./components/MapView";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Mapview />
      <Footer />
    </div>
  );
}

export default App;
