import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 0,
    position: 'absolute',
    height: 54,
    left: 24,
    right: 24,
    top: 142,
  },
  newTask: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    padding: 18,
    gap: 4,
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
  },
  buttonAddNewTask: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  }
});