import styles from "./Content.module.css";

import { Trash } from "phosphor-react";

interface TasksProps {
  content: string;
  onDeleteTask: (comment: string) => void;
}

function Content({content, onDeleteTask}: TasksProps) {

  const handleDeleteTask = () => {
    onDeleteTask(content);
  };

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
          <button onClick={handleDeleteTask}>
            <Trash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Content;