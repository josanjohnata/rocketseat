import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './App.module.css';

export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Josan Johnata"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae vel soluta odio deleniti deserunt veritatis ipsum, voluptates similique dolorum dolores quod voluptas corrupti, hic magnam inventore dolor nostrum? Ab, facilis!"
          />
          <Post
            author="Esterzinha"
            content="Princesa dorminhoca"
          />
          <Post
            author="Eide"
            content="Rainha dorminhoca"
          />
        </main>
      </div>
    </>
  );
};
