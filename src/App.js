import './App.css';
import Greet from '../../reacthelloworld/src/components/Greet'
import AnotherNameForGreetES6 from '../../reacthelloworld/src/components/GreetES6'
import { GreetWithoutExport } from '../../reacthelloworld/src/components/GreetWithoutExport'
import GreetClassComponent from "./components/GreetClassComponent";
import GreetWithChild from "./components/GreetWithChild";
import Message from "./components/Message";
import CounterWithDiffEventHandlerBindings from "./components/CounterWithDiffEventHandlerBindings";
import GreetWithDestructor from "./components/GreetWithDestructor";
import ParentComponent from "./components/ParentComponent";
import UserGreetingConditionalRendering from "./components/UserGreetingConditionalRendering";
import NameList from "./components/NameList";
import PersonList from "./components/PersonList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import './appStyles.css'
import style from './appStyles.module.css'
import FormComponent from "./components/FormComponent";
import LifecycleA from "./components/LifecycleA";
import Table from "./components/Table";
import ParentCompOfPure from "./components/ParentCompOfPure";
import RefsDemo from "./components/RefsDemo";
import FocusInputParentComponent from "./components/FocusInputParentComponent";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

// CSS Module style sheets only apply to parent and do not pass on CSS styles to children.
// They are locally scoped by default, and can avoid CSS conflicts.
function App()
{
  return (
      <div className="App">
        <ErrorBoundary>
           <Hero heroName="Superman"/>
        </ErrorBoundary>
        <ErrorBoundary>
           <Hero heroName="Joker"/>
        </ErrorBoundary>
        <PortalDemo/>
        <FocusInputParentComponent/>
        <RefsDemo/>
        <ParentCompOfPure/>
        <Table/>
        <LifecycleA/>
        <FormComponent/>
        <h1 className='error'>Error</h1>
        <h1 className={style.success}>Success</h1>
        <StyleSheet primary={true}/>
        <Inline/>
        <PersonList/>
        <NameList/>
        <UserGreetingConditionalRendering/>
        <ParentComponent/>
        <Greet name="Horatio"/>
        <AnotherNameForGreetES6 name="Harper"/>
        <GreetWithoutExport/>
        <GreetClassComponent name="Saori Yamaguchi"/>
        <GreetWithChild name="Isaac">
          <button>Action</button>
        </GreetWithChild>
        <Message/>
        <GreetWithDestructor name="Bruce Wayne" heroName = "Batman"/>
        <CounterWithDiffEventHandlerBindings/>
      </div>
  );
}

export default App;
