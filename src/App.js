import logo from './logo.svg';
import './App.css';
import HeaderComponent from './component/HeaderComponent';
import BannerComponent from './component/BannerComponent';
import ItemComponent from './component/ItemComponent';
import FooterComponent from './component/FooterComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <BannerComponent/>
      <ItemComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
