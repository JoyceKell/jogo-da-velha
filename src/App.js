import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="d-flex flex-column align-items-center pt-5">
      <Header />
      <div className="d-flex justify-content-center pt-3">
        <Game />
      </div>
    </div>
  );
}

export default App;
