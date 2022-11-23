
import './App.module.scss';
import UserProvider from './components/UserProvider';
import Styles from './App.module.scss'
const App = () => {
  return (
    <div className={Styles.app}>
      <UserProvider/>
    </div>
  );
}

export default App;
