
import './App.css';
import AuthForm from './AuthForm';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <main className='main'>
      <AuthForm/>
      </main>
    </div>
  );
}

export default App;
