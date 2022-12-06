import './App.css';
import Greet from '../../reacthelloworld/src/components/Greet'
import AnotherNameForGreetES6 from '../../reacthelloworld/src/components/GreetES6'
import { GreetWithoutExport } from '../../reacthelloworld/src/components/GreetWithoutExport'

function App() {
  return (
      <div className="App">
        <Greet/>
        <AnotherNameForGreetES6/>
        <GreetWithoutExport/>
      </div>
  );
}

export default App;
