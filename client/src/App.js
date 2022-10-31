import "./styles/app.scss"
import Footer from "./components/Footer";
import HeaderModal from "./components/HeaderModal";
import WordSearch from "./components/WordSearch";
import LoginModal from "./components/LoginModal";
function App() {
  return (
    <div className="app">
        <LoginModal/>
        <HeaderModal/>
        <WordSearch/>
        <Footer/>
    </div>
  );
}

export default App;
