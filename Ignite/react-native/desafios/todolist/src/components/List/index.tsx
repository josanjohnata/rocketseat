import { Text, View } from "react-native";

import Icon from 'react-native-vector-icons/EvilIcons';
import { styles } from "./styles";

export function List() {
  return (
    <View>
      <View style={styles.containerTask}>
        <Text style={styles.checkBox}>o</Text>{/* Aqui será o checkbox */}
        <View>
          <Text style={styles.textTask}>
            Integer urna interdum massa libero auctor neque turpis turpis semper.
          </Text>
        </View>
        <View style={styles.containerTrash}>
          <Icon name='trash' style={styles.trash} />
        </View>
      </View>
    </View>
  )
}