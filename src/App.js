import React, {
  // useEffect,
  // createContext,
  // useReducer,
  // useContext,
  // useState
} from "react";
import NAVBAR from "./components/navbar/App";
// import { Button, Modal } from "react-bootstrap";
// import ModalPop from "./components/ModalPop/ModalPop";

function App() {
  // const [modl, setModl] = useState(true);
  // const modalPop = () => setModl(false);
return(
    <div className="mainPage">
        {
            // modl?<ModalPop CancelModal = {modalPop}/>:
            <div><NAVBAR/></div>
        }
    </div>
)
}
export default App;
