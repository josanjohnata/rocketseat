import Header from "./components/Header/Header";
import NewTasks from "./components/NewTasks/NewTasks";

import "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <NewTasks />
      </main>
    </>
  );
}

export default App;
