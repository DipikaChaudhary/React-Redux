import './App.css'
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import FruitContainer from './components/FruitContainer';
import { store } from './Redux/store';

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <FruitContainer />
        <Counter />
      </div>
    </Provider>
  );

}
export default App;
