import './App.css';
import Calendar from './components/calendario/Calendar';
import Header from './components/partials/Header'
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display : 'flex'}}>
        <Sidebar />
        <div className='content'>
          <Calendar />
        </div>
      </div>
    </div>
  );
}

export default App;
