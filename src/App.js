import './App.css';
import Greet from '../../reacthelloworld/src/components/Greet'
import AnotherNameForGreetES6 from '../../reacthelloworld/src/components/GreetES6'
import { GreetWithoutExport } from '../../reacthelloworld/src/components/GreetWithoutExport'
import GreetClassComponent from "./components/GreetClassComponent";
import GreetWithChildren from "./components/GreetWithChild";

function App()
{
  return (
      <div className="App">
        <Greet name="Horatio"/>
        <AnotherNameForGreetES6 name="Harper"/>
        <GreetWithoutExport/>
        <GreetClassComponent name="Saori Yamaguchi"/>
        <GreetWithChildren name="Isaac">
          <button>Action</button>
        </GreetWithChildren>
      </div>
  );
}

export default App;
