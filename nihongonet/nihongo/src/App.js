import Header from './Components/Header';
import Homepage from './Components/Homepage';
import './App.css';
//https://tailwindcss.com/docs/guides/create-react-app
function App() {
  return (
    <div className="App">
        <Header text={"Nihongo.net"}/>
        <Homepage/>
    </div>
  );
}

export default App;
