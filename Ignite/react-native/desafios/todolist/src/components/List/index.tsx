import { Text, TouchableOpacity, View } from "react-native";

import IconTrash from 'react-native-vector-icons/EvilIcons';
import IconChecked from 'react-native-vector-icons/AntDesign';
import IconUnchecked from 'react-native-vector-icons/Entypo';
import { styles } from "./styles";
import { useState } from "react";

export function List() {
  const [isChecked, setIsChecked] = useState([
    { id: 1, text: 'Primeira tarefa', isChecked: false },
    { id: 2, text: 'Segunda tarefa', isChecked: true },
    { id: 3, text: 'Terceira tarefa', isChecked: false },
  ])

  const handleTasksDone = (itemId: number) => {
    setIsChecked((prevState) =>
      prevState.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  return (
    <View style={styles.containerList}>
      {isChecked.map((item) =>(
        <View key={item.id} style={styles.containerTask}>
          <TouchableOpacity onPress={() => handleTasksDone(item.id)} >
            {
              item.isChecked ? <IconChecked name="checkcircle" style={styles.checked} /> 
                : <IconUnchecked name="circle" style={styles.unchecked} />
            }
          
            <Text style={styles.textTask}>
              Integer urna interdum massa libero auctor neque turpis turpis semper.
            </Text>
          </TouchableOpacity>
          <View style={styles.containerTrash}>
            <IconTrash name='trash' style={styles.trash} />
          </View>
        </View>
      ))}
      
    </View>
  )
}