import logo from './logo.svg';
import './App.css';
import LoginPage from './components/App/LoginPage/LoginPage';
import SendingCode from './components/App/SendingCodePage/SendingCode';

function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      <SendingCode/>
    </div>
  );
}

export default App;
