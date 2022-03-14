import './App.css'
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import FruitContainer from './components/FruitContainer';
import { store } from './Redux/store';
import Blogs from './components/Blogs';

function App() {


  return (
    <Provider store={store}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }} className="App">
        <Blogs />
        <div>
          <FruitContainer />
          <Counter />
        </div>
      </div>
    </Provider>
  );

}
export default App;
