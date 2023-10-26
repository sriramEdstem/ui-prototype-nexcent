import "./App.css";
import Achievements from "./components/body/Achievements";
import Body from "./components/body/Body";
import Calender from "./components/body/Calender";
import Customers from "./components/body/Customers";
import Updates from "./components/body/Updates";
import Clients from "./components/clients/Clients";
import Community from "./components/community/Community";
import Footer from "./components/footer/Footer";
import Footer2 from "./components/footer/Footer2";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Clients></Clients>
      <Community></Community>
      <div className="flex flex-col gap-12">
        <Body></Body>
        <Achievements></Achievements>
        <Calender></Calender>
        <Customers></Customers>
        <Updates></Updates>
      </div>
      <Footer></Footer>
      <Footer2></Footer2>
    </>
  );
}

export default App;
