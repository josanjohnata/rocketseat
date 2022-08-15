import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./NewTasks.module.css";
import { PlusCircle } from "phosphor-react";

function NewTasks() {
  const [tasks, setTasks] = useState('');
  const [newTask, setNewTask] = useState('');

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setNewTask([...tasks, newTask]);
    setNewTask('');
  }

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("You need to write something!");
  }

  const isNewTaskEmpty = newTask.length === 0
  
  return (
    <form
      onSubmit={handleCreateNewTask}
      className={styles.newTaskForm}
    >
      <input
        placeholder="Add a new task"
        value={newTask}
        onChange={handleCreateNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button
        type="submit"
        disabled={isNewTaskEmpty}
      >
        <span>
          Submit
          <PlusCircle size={16} className={styles.icon}/>
        </span>
      </button>
    </form>
  );
}

export default NewTasks;
