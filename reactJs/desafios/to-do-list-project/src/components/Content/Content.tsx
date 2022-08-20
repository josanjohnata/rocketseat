import styles from "./Content.module.css";

import { Trash } from "phosphor-react";
import { useState } from "react";

interface TasksProps {
  content: string;
  onDeleteTask: (comment: string) => void;
}

function Content({content, onDeleteTask}: TasksProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleDeleteTask = () => {
    onDeleteTask(content);
  };

  return (
    <div className={styles.newTaskInfo}>
      <div>
        <div className={styles.newTask}>
          <div className={styles.newTaskItem}>
            <input
              type="checkbox"
              id="myTask"
              onChange={() => {
                setIsChecked(!isChecked);
              }}
            />
            <label
              htmlFor="myTask"
            >
              <p className={isChecked === true ? styles.checkbox : styles.checkboxUnchecked}>{content}</p>
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