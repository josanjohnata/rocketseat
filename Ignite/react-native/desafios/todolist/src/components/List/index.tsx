import { Text, TouchableOpacity, View } from "react-native";

import IconTrash from 'react-native-vector-icons/EvilIcons';
// import IconChecked from 'react-native-vector-icons/AntDesign';
// import IconUnchecked from 'react-native-vector-icons/Entypo';
import { styles } from "./styles";

type Props = {
  taskName: string;
  onRemove: () => void;
}

export function List({ taskName, onRemove }: Props) {

  // const handleTasksDone = (itemId: number) => {
  //   setIsChecked((prevState) =>
  //     prevState.map((item) =>
  //       item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
  //     )
  //   );
  // };

  return (
    <View style={styles.containerList}>
      {/* {isChecked.map((item) =>( */}
        <View style={styles.containerTask}>
          <TouchableOpacity >
            {/* {
              item.isChecked ? <IconChecked name="checkcircle" style={styles.checked} /> 
                : <IconUnchecked name="circle" style={styles.unchecked} />
            } */}
          
            <Text style={styles.textTask}>
              {taskName}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerTrash}
            onPress={onRemove}
          >
            <IconTrash name='trash' style={styles.trash} />
          </TouchableOpacity>
        </View>
      {/* ))} */}
      
    </View>
  )
}