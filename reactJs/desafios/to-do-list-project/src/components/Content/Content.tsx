import styles from "./Content.module.css";

import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";

interface TasksProps {
  content: string;
  onDeleteTask: (comment: string) => void;
  onHandleTaskDone: (comment: number) => void;
  onHandleTaskToDO: (comment: number) => void;
  countDone: number;
}

function Content({
  content,
  onDeleteTask,
  onHandleTaskDone,
  onHandleTaskToDO,
  countDone,
}: TasksProps) {
  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleTaskDone() {
    onHandleTaskDone(countDone);
    setIsChecked(!isChecked);
  }

  function handleTaskToDO() {
    onHandleTaskToDO(countDone);
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.newTaskInfo}>
      <div className={styles.newTask}>
        <div className={styles.newTaskItem}>
          <a onClick={isChecked ? handleTaskDone : handleTaskToDO}>
            {isChecked === true ? (
              <CheckCircle size={20} color="#5E60CE" weight="bold" />
            ) : (
              <Circle size={20} color="#4EA8DE" weight="bold" />
            )}
          </a>
          <p
            className={
              isChecked === true ? styles.checkbox : styles.checkboxUnchecked
            }
          >
            {content}
          </p>
        </div>
        <button onClick={handleDeleteTask}>
          <Trash />
        </button>
      </div>
    </div>
  );
}

export default Content;
