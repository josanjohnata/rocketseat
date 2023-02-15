import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/AntDesign'
import { List } from "../List";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export function NewTask() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [count, setCount] = useState(0);

  const handleNewTaskAdd = (event: FormEvent) => {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);

    setNewTaskText('');
  }

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const taskWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    });
    setTasks(taskWithoutDeletedOne);
  }
  
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={() => handleCreateNewTaskChange}
        />

        <TouchableOpacity
            style={styles.newTask}
            activeOpacity={0.7}
            onPress={() => handleNewTaskAdd}
          >
          <Icon name="pluscircleo" size={16} color="#fff"/>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        <View style={styles.taskStatus}>
          <View style={styles.createdTask}>
            <Text style={styles.createdName}>Criadas</Text>
            <View style={styles.counterCreated}>
              <Text style={styles.counterStatus}>{count}</Text>
            </View>
          </View>

          <View style={styles.doneTask}>
            <Text style={styles.doneName}>Concluídas</Text>
            <View style={styles.counterCreated}>
              <Text style={styles.counterStatus}>{count}</Text>
            </View>
          </View>
        </View>

        <View style={styles.empty}>
          {
            newTaskText === '' ?
            <>
              <Icon name="filetext1" size={56} color='#808080' />
              <View style={styles.emptyMessage}>
                <Text style={styles.emptyText1}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={styles.emptyText2}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            </>
            :
            <List />
          }
        </View>
      </View>
    </>
  )
}