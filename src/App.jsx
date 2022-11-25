
import './App.module.scss';
import UserProvider from './components/UserProvider';
import Styles from './App.module.scss'
import ThemeProvider from './components/ThemeProvider/ThemeProvider';
const App = () => {
  return (
    <div className={Styles.app}>
      <UserProvider/>
      <ThemeProvider />
    </div>
  );
}

export default App;
