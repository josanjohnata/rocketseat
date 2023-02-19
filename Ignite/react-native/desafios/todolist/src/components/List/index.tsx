import { Text, TouchableOpacity, View } from "react-native";

import IconTrash from 'react-native-vector-icons/EvilIcons';
import IconChecked from 'react-native-vector-icons/AntDesign';
import IconUnchecked from 'react-native-vector-icons/Entypo';
import { styles } from "./styles";
import { useState } from "react";

type Props = {
  taskName: string;
  onRemove: () => void;
}

export function List({ taskName, onRemove }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const [taskDoneCount, setTaskDoneCount] = useState(0);

  return (
    <View style={styles.containerList}> 
        <View style={styles.containerTask}>
          <TouchableOpacity
            onPress={() => {
              setIsChecked(!isChecked);
              if (!isChecked) {
                setTaskDoneCount(taskDoneCount + 1);
              } else {
                setTaskDoneCount(taskDoneCount - 1);
              }
            }}
          >
            {
              isChecked ?
              <IconChecked
                name="checkcircle"
                style={styles.checked}
              />
                : <IconUnchecked name="circle" style={styles.unchecked} />
            }
            {
              isChecked ? 
                <Text
                  style={styles.textTaskChecked}
                  numberOfLines={2}
                >
                  {taskName}
                </Text>
                  : 
                    <Text
                      style={styles.textTask}
                      numberOfLines={2}
                    >
                      {taskName}
                    </Text>
            }
            
            
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerTrash}
            onPress={onRemove}
          >
            <IconTrash name='trash' style={styles.trash} />
          </TouchableOpacity>
        </View>
    </View>
  )
}