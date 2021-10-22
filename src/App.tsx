import style from './App.module.css';
import Navbar from './components/navbar/navbar';
import Cart from './components/cart/cart';
import Contents from './components/contents/contents';

function App() {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <Cart />
        <Contents />
      </div>
    </>
  );
}

export default App;
