import LoginPage from './login';
import Dashboard from './dashboard';
import './App.css';

function App() {
  const isLoggedIn = !true;

  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <LoginPage />}
    </div>
  );
}

export default App;
