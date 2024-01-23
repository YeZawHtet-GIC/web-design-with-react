import Features from "./Features";
import Features2 from "./Features2";
import Features3 from "./Features3";
import Header from "./Header";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Pricing2 from "./Pricing2";
import "./App.css";
import Feedback from "./Feedback";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Hero />
      <Features />
      <Features2 />
      <Features3 />
      <Pricing />
      <Pricing2 />
      <Feedback />
    </div>
  );
}

export default App;
