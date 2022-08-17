import styles from "./Content.module.css";

import { Trash } from "phosphor-react";

function Content({content}) {
  return (
    <div className={styles.newTaskInfo}>
      <div className={styles.newTaskContent}>
        <div className={styles.newTask}>
          <div className={styles.newTaskItem}>
            <input type="checkbox" id="myTask" />
            <label htmlFor="myTask">
              <p>{content}</p>
            </label>
          </div>
          <button>
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;