import './App.css';
import upImage from './hand.png';
import downImage from './dialog.png';
import { TodoList } from './TodoList';

function App() {
  return (
    <div  className='app'>
      <div className="container">
      <img src={upImage} alt="upImage" width="250px"/>
      </div>
      <div className="container">
      <h1>ToDo List</h1>
      </div>
      <TodoList />
      <div className="container">
      <img src={downImage} alt="downImage" width="250px"/>
      </div>
    </div>
  );
}

export default App;
