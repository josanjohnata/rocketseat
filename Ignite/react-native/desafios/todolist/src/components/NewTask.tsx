import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/AntDesign'

export function NewTask() {
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"/>

        <TouchableOpacity
            style={styles.newTask}
            activeOpacity={0.7}
            // onPress={onAddNewTask}
          >
          <Icon name="pluscircleo" size={16} color="#fff"/>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksContainer}>
        <View style={styles.taskStatus}>
          <View style={styles.createdTask}>
            <Text style={styles.createdName}>Criadas</Text>
            <View style={styles.counterCreated}>
              <Text style={styles.counterStatus}>0</Text>
            </View>
          </View>

          <View style={styles.doneTask}>
            <Text style={styles.doneName}>Concluídas</Text>
            <View style={styles.counterCreated}>
              <Text style={styles.counterStatus}>0</Text>
            </View>
          </View>
        </View>

        <View style={styles.empty}>
          <Icon name="filetext1" size={56} />
          <View style={styles.emptyMessage}>
            <Text style={styles.emptyText1}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.emptyText2}>Crie tarefas e organize seus itens a fazer</Text>
          </View>
        </View>
      </View>
    </>
  )
}