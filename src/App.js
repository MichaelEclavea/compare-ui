import MaterialPage from "./pages/MaterialUi";
import './App.css';

function App() {
  return (
    <div >
      <header className="App-header">
      <h1>Compare different UI</h1>
      <div className='main-container' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 45vw)'}}>
        <div className='material-container' style={{display: 'flex', flexDirection: 'column'}}>
        <MaterialPage />
        </div>
        <div className='fluent-container'>

        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
