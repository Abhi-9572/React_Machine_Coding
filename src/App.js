import logo from "./logo.svg";
import "./App.css";

import { jsonData } from "./json_data/Data";

import RecursiveDisplay from "./component/recursive_render/RecursiveDisplay";
import TicTacToe from "./component/tic_tac_toe/Tic_Tac_Toe";
import Notification from "./component/toast-component/Notification";
import useNotification from "./component/toast-component/useNotification";

import Todo from "./component/todoApp/Todo";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("top-left");
  return (
    <div className="App">
      {/* recursive_render  */}
      {/* <RecursiveDisplay data={jsonData} /> */}
      {/* recursive_render  */}

      {/* tic_tac_toe */}
      {/* <TicTacToe /> */}
      {/* tic_tac_toe */}

      {/* toast_component */}

      {/* <button
        onClick={() =>
          triggerNotification({
            type: "success",
            message: "message sent successfully",
            duration: 5000,
          })
        }
      >
        Trigger Success
      </button>
      <button
        onClick={() =>
          triggerNotification({
            type: "error",
            message: "Its error message",
            duration: 10000,
          })
        }
      >
        Trigger Error
      </button>
      {NotificationComponent} */}

      {/* toast_component */}

      {/* todoApp */}
      <div>Hello</div>
      <Todo />
      {/* todoApp */}
    </div>
  );
}

export default App;
