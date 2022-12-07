import './App.css';
import Greet from '../../reacthelloworld/src/components/Greet'
import AnotherNameForGreetES6 from '../../reacthelloworld/src/components/GreetES6'
import { GreetWithoutExport } from '../../reacthelloworld/src/components/GreetWithoutExport'
import GreetClassComponent from "./components/GreetClassComponent";

function App()
{
  return (
      <div className="App">
        <Greet name="Horatio"/>
        <AnotherNameForGreetES6 name="Harper"/>
        <GreetWithoutExport/>
        <GreetClassComponent/>
      </div>
  );
}

export default App;
