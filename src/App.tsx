import "./App.css";
import MainBody from "./components/MainBody";
import Sidebar from "./components/Sidebar";

function App() {
  return <div className="flex flex-row max-w-[1600px]  bg-[#FAFAFA]">
    <Sidebar/>
    <MainBody/>
  </div>;
}

export default App;
