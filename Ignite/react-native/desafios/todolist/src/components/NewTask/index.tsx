import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/AntDesign'
import { List } from "../List";
import { useState } from "react";

export function NewTask() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [count, setCount] = useState(0);

  const handleNewTaskAdd = () => {
    if (!newTaskText) {
      return Alert.alert('Texto vazio', 'Você precisa digitar uma nova task!');
    }
    setTasks(prevState => [...prevState, newTaskText]);
    setCount(count + 1);

    setNewTaskText('');
  }

  const handleTaskRemove = (taskName: string) => {
    Alert.alert('Remover', 'Tem certeza que deseja remover?', [
     {
       text: 'Sim',
       onPress: () => {
        setTasks(prevState => prevState
         .filter(task => task !== taskName));
        setCount(count - 1);
        }
     },
     {
       text: 'Não',
       style: 'cancel'
     }
   ])
 };
  
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setNewTaskText}
          value={newTaskText}
        />

        <TouchableOpacity
            style={styles.newTask}
            activeOpacity={0.7}
            onPress={handleNewTaskAdd}
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
              <Text style={styles.counterStatus}>{0}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <List
              key={item}
              onRemove={() => handleTaskRemove(item)}
              taskName={item}
            />
          )}
          ListEmptyComponent={() => (
            <View style={styles.empty}>
              <>
                <Icon name="filetext1" size={56} color='#808080' />
                <View style={styles.emptyMessage}>
                  <Text style={styles.emptyText1}>Você ainda não tem tarefas cadastradas</Text>
                  <Text style={styles.emptyText2}>Crie tarefas e organize seus itens a fazer</Text>
                </View>
              </>
            </View>
          )}
        />
      </View>
    </>
  )
}