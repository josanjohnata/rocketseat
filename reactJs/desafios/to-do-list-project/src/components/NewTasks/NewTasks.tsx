import Content from "../Content/Content";

import styles from "./NewTasks.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

function NewTasks() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");
  
  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);

    setNewTaskText("");
  }

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  return (
    <article>
      <form
        onSubmit={handleCreateNewTask}
        className={styles.newTaskForm}
      >
        <textarea
          placeholder="Add a new task"
          name="newTask"
          value={newTaskText}
          onChange={handleCreateNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button type="submit">
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
            <span className={styles.countCreated}>0</span>
          </div>

          <div className={styles.taskStatus}>
            <p className={styles.done}>Done</p>
            <span className={styles.countDone}>0 of 0</span>
          </div>
        </div>
      </div>
      {tasks.map(content => {
        return <Content content={content} />;
      })}
    </article>
  );
}

export default NewTasks;
