import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/Header';
import { NewTask } from './src/components/NewTask';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <NewTask />
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
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
