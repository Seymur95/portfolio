import { Banner } from "./components/banner/Banner";
import Features from "./components/features/Features";
import { Navbar } from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="w-full h-auto">
      <div className="max-w-screen-2xl min-h-screen px-[5%] bg-black text-white">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
      </div>
    </div>
  );
}

export default App;
