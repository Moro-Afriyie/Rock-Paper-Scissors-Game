import './App.css';
import Lizard from './components/icons/Lizard';
import Paper from './components/icons/Paper';
import Rock from './components/icons/Rock';
import Scissors from './components/icons/Scissors';
import Spock from './components/icons/Spock';

function App() {
  return (
    <div className="App">
     <Rock classType="circle" />
     <Paper classType="circle" />
     <Scissors classType="circle" />
     <Lizard classType="circle" />
     <Spock classType="circle" />
    </div>
  );
}

export default App;
