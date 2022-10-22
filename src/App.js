import "./App.css";
import Body from "./components/Body";
import Context from "./components/Context";
import Header from "./components/Header";

function App() {
  return (
    <Context>
      <main>
        <Header />
        <Body />
      </main>
    </Context>
  );
}

export default App;
