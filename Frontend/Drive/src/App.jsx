import "./App.css";

import Allroutes from "./routes/Route";
import { Provider } from "react-redux"; // Import the Provider
import {store} from "../src/reducer/store.js";

function App() {
  return (
    <>
     <Provider store={store}> 
      <Allroutes />
      </Provider>
    </>
  );
}

export default App;
