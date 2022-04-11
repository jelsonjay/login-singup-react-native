import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import Colors from '../constants/color';
import Styles from '../styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SignInButton} from '../constants/Botton';

export default function SinginScreen({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.brand}>
            <Image
              style={styles.logo}
              source={require('../assets/instagram.png')}
            />
          </View>
          <View style={{marginTop: 40, alignItems: 'center'}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 27, color: Colors.black}}>
              Welcome
            </Text>
            <Text
              style={{fontWeight: 'bold', fontSize: 20, color: Colors.gray}}>
              Signin to continue
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <View style={Styles.inputContainer}>
              <Icon
                name="envelope"
                size={25}
                color={Colors.gray}
                style={Styles.inputIcon}
              />
              <TextInput placeholder="Enter email.." style={Styles.input} />
            </View>

            <View style={Styles.inputContainer}>
              <Icon
                name="lock"
                size={25}
                color={Colors.gray}
                style={Styles.inputIcon}
              />
              <TextInput
                placeholder="Enter password.."
                style={Styles.input}
                secureTextEntry
              />
            </View>

            <SignInButton />
            <View style={styles.space}>
              <View style={styles.spaceLine}></View>
              <Text style={styles.lineText}>OR</Text>
              <View style={styles.spaceLine}></View>
            </View>
          </View>
          <View style={styles.buttonsWrap}>
            <View style={styles.buttons}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Log in with
              </Text>
              <Image
                source={require('../assets/google.png')}
                style={styles.google}
              />
            </View>
            <View style={{width: 10}} />
            <View style={styles.buttons}>
              <Text style={{fontWeight: 'bold', fontSize: 16}}>
                Log in with
              </Text>
              <Image
                source={require('../assets/linkedin.png')}
                style={styles.google}
              />
            </View>
          </View>
          <View style={styles.textWrap}>
            <Text style={{fontWeight: 'bold', color: Colors.gray}}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.primary,
                  marginLeft: 5,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
  },
  brand: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: '20%',
    height: 128,
    width: 128,
  },
  brandText1: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.primary,
  },
  brandText2: {
    fontWeight: 'bold',
    fontSize: 25,
    color: Colors.black,
  },
  space: {
    marginTop: '15%',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spaceLine: {
    width: '100%',
    height: 2,
    backgroundColor: '#f4f3f3',
  },

  lineText: {
    marginHorizontal: '10%',
    fontWeight: 'bold',
    color: Colors.black,
  },
  buttonsWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.line,
  },
  google: {
    width: 20,
    height: 25,
    marginLeft: 5,
  },
  textWrap: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 60,
  },
});
