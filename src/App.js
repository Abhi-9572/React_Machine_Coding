import logo from "./logo.svg";
import "./App.css";

import { jsonData } from "./json_data/Data";

import RecursiveDisplay from "./component/recursive_render/RecursiveDisplay";

function App() {
  return (
    <div className="App">
      <RecursiveDisplay data={jsonData} />
    </div>
  );
}

export default App;
