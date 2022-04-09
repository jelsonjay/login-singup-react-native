import {StyleSheet} from 'react-native';
import Colors from '../constants/color';
const Styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputIcon: {
    marginTop: 15,
    position: 'absolute',
  },
  input: {
    flex: 1,
    color: Colors.gray,
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    fontSize: 16,
  },
});

export default Styles;
