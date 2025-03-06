import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AppRouter from './Router';

function App() {
  return (
    <div>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
