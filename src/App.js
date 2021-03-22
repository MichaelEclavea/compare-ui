import MaterialPage from "./pages/MaterialUi"
import FluentUiPage from './pages/FluentUi'
import './App.css';

function App() {
  return (
    <div >
      <header className="App-header">
      <h1>Compare different UI</h1>
      <div className='main-container' style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 45vw)', justifyContent: 'space-around'}}>
        <div className='material-container' style={{display: 'flex', flexDirection: 'column'}}>
        <MaterialPage />
        </div>
        <div className='fluent-container'>
        <FluentUiPage />
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
