import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import { OrbitSpace } from "orbit-space";

function App() {
  return (
    <>
      <OrbitSpace>
        <div className="App">
          <Navbar />
          <Intro />
        </div>
      </OrbitSpace>
    </>
  );
}

export default App;
