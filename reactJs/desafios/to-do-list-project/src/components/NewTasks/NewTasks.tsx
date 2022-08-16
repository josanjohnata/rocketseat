import Content from "../Content/Content";

import styles from "./NewTasks.module.css";
import { PlusCircle, Trash } from "phosphor-react";

function NewTasks() {
  
  return (
    <article>
      <header
        className={styles.newTaskForm}
      >
      <input
        placeholder="Add a new task"
        required
      />
      <button
        type="submit"
      >
        <span>
          Submit
          <PlusCircle
            size={16}
            className={styles.icon}
          />
        </span>
      </button>
    </header>

    <div className={styles.newTaskInfo}>
      <div className={styles.newTaskHeader}>
        <div className={styles.taskStatus}>
        <p className={styles.created}>Created</p>
        <span className={styles.countCreated}>0</span>
        </div>

        <div className={styles.taskStatus}>
        <p className={styles.done}>Done</p>
        <span className={styles.countDone}>0 of 0</span>
        </div>      
      </div>    

      <div className={styles.newTaskContent}>
        <div className={styles.newTask}>
          <div className={styles.newTaskItem}>
            <input type="checkbox" id="myTask"/>
            <label htmlFor="myTask">
              <p>My task for to do</p>
            </label>
          </div>
          <button>
            <Trash />
          </button>
        </div>
      </div>
    </div>
    </article>
  );
}

export default NewTasks;
