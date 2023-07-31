import React, {
  useEffect,
  createContext,
  useReducer,
  useContext,
  useState
} from "react";
import NAVBAR from "./components/navbar/App";
import { Button, Modal } from "react-bootstrap";
import ModalPop from "./components/ModalPop/ModalPop";

function App() {
  const [modl, setModl] = useState(true);
  const modalPop = () => setModl(false);
return(
    <div>
        {
            modl?<ModalPop CancelModal = {modalPop}/>:<NAVBAR/>
        }
    </div>
)
}
export default App;
