import { Image, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={styles.rocket} source={require('../assets/rocket.png')}/>
        <Image style={styles.to} source={require('../assets/to.png')}/>
        <Image style={styles.do} source={require('../assets/do.png')}/>
      </View>
    </View>
  )
}