import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerList: {
    marginLeft: 9
  },
  containerTask: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingRight: 8,
    paddingBottom: 12,
    paddingLeft: 12,
    gap: 0,
    width: 327,
    height: 64,
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 8,
    order: 0,
    alignSelf: 'stretch',
    flexGrow: 0,
    marginBottom: 8,
  },
  textTask: {
    width: 270,
    height: 40,
    left: 30,
    flexWrap: 'wrap',
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: '#F2F2F2',
    order: 1,
    flexGrow: 1,
    paddingRight: 25,
  },
  containerTrash: {
    color: '#fff',
    width: 32,
    height: 32,
    borderRadius: 4,
    order: 2,
    flexGrow: 0,
  },
  trash: {
    color: '#808080',
    fontSize: 32,
  },
  unchecked: {
    color: '#4EA8DE',
    fontWeight: '400',
    position: 'absolute',
    width: 24,
    height: 24,
    order: 0,
    flexGrow: 0,
    fontSize: 24,
    top: 6,
  },
  checked: {
    color: '#5E60CE',
    fontWeight: 'bold',
    position: 'absolute',
    width: 24,
    height: 24,
    order: 0,
    flexGrow: 0,
    fontSize: 24,
    top: 6,
  },
  textTaskChecked: {
    textDecorationLine: 'line-through',
    textDecorationColor: '#808080',
    width: 270,
    height: 40,
    left: 30,
    flexWrap: 'wrap',
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    color: '#808080',
    order: 1,
    flexGrow: 1,
    paddingRight: 25,
  }
})