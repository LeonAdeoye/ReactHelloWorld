import './App.css';
import Greet from '../../reacthelloworld/src/components/Greet'
import AnotherNameForGreetES6 from '../../reacthelloworld/src/components/GreetES6'
import { GreetWithoutExport } from '../../reacthelloworld/src/components/GreetWithoutExport'
import GreetClassComponent from "./components/GreetClassComponent";
import GreetWithChild from "./components/GreetWithChild";
import Message from "./components/Message";
import Counter from "./components/Counter";
import GreetWithDestructor from "./components/GreetWithDestructor";

function App()
{
  return (
      <div className="App">
        <Greet name="Horatio"/>
        <AnotherNameForGreetES6 name="Harper"/>
        <GreetWithoutExport/>
        <GreetClassComponent name="Saori Yamaguchi"/>
        <GreetWithChild name="Isaac">
          <button>Action</button>
        </GreetWithChild>
        <Message/>
        <GreetWithDestructor name="Bruce Wayne" heroName = "Batman"/>
        <Counter/>
      </div>
  );
}

export default App;
