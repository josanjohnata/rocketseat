import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>To Do List</Text>
      <StatusBar
        style="light"
        backgroundColor='transparent'
        translucent
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
