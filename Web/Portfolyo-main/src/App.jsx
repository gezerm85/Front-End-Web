import "./App.css";
import { Header, Footer, CustomDrawer } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <CustomDrawer />
      <Footer />
    </div>
  );
}

export default App;
