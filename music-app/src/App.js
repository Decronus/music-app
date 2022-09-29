import "./style.css";
import Logo from "./components/logo";
import Burger from "./components/burger";
import Search from "./components/search";
import Filter from "./components/filter";
import CenterblockContent from "./components/centerblock-content";
import MainSidebar from "./components/main-sidebar";
import Bar from "./components/bar";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <Logo />
            </div>
            <Burger />
          </nav>
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter />
            <CenterblockContent />
          </div>

          <MainSidebar />
        </main>
        <Bar />
      </div>
    </div>
  );
}

export default App;
