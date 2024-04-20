import "./App.css";
import Greeting from "./components/pages/greeting";

function App() {
  return (
    <div className="flex flex-col gap-6">
      <Greeting name="World" />
    </div>
  );
}

export default App;
