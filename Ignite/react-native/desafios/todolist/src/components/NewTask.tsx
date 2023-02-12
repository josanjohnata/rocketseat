import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/AntDesign'

export function NewTask() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />

      <TouchableOpacity
          style={styles.newTask}
          activeOpacity={0.7}
          // onPress={onAddNewTask}
        >
        <Icon name="pluscircleo" size={16} color="#fff"/>
      </TouchableOpacity>
    </View>
  )
}