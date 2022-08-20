import Content from "../Content/Content";

import styles from "./NewTasks.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

function NewTasks(isChecked: boolean) {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [count, setCount] = useState(0);
  const [countDone, setCountDone] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("You need to write something!");
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });
    setTasks(tasksWithoutDeletedOne);
    setCount(count - 1);
    isChecked && countDone !== 0
      ? setCountDone(countDone - 1)
      : setCountDone(countDone);
  }

  function handleTaskDone() {
    setCountDone(countDone - 1);
  }

  function handleTaskToDO() {
    setCountDone(countDone + 1);
  }

  return (
    <article>
      <form onSubmit={handleCreateNewTask} className={styles.newTaskForm}>
        <input
          placeholder="Add a new task"
          name="newTask"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit" onClick={() => setCount(count + 1)}>
          <span>
            Submit
            <PlusCircle size={16} className={styles.icon} />
          </span>
        </button>
      </form>
      <div className={styles.newTaskInfo}>
        <div className={styles.newTaskHeader}>
          <div className={styles.taskStatus}>
            <p className={styles.created}>Created</p>
            <span className={styles.countCreated}>{count}</span>
          </div>

          <div className={styles.taskStatus}>
            <p className={styles.done}>Done</p>
            <span className={styles.countDone}>
              {countDone} of {count}
            </span>
          </div>
        </div>
      </div>
      {tasks.map((content) => {
        return (
          <Content
            key={content}
            content={content}
            onDeleteTask={deleteTask}
            onHandleTaskDone={handleTaskDone}
            onHandleTaskToDO={handleTaskToDO}
            countDone={0}
          />
        );
      })}
    </article>
  );
}

export default NewTasks;
