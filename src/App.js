import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuRouter from "./router/MenuRouter";

function App() {
  return (
    <div className='text-center'>
      <Header />
      <MenuRouter />
      <Footer />
    </div>
  );
}

export default App;
