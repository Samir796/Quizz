import React, {useState} from 'react';
import {View, Text, StyleSheet, Keyboard} from 'react-native';
import BackBtn from '../../components/BackBtn';
import BgImg from '../../components/BgImage';
import CustomBtn from '../../components/CustomButton';
import CustomInput from '../../components/CustomTextInput';
import ForgotPassword from '../../components/Forgot';
import auth from '@react-native-firebase/auth';

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

const Login = ({route, navigation}) => {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();

  const [hidePass, setHidePass] = useState(true);
  const {email} = route.params;

  const [userInfo, setUserInfo] = useState({
    psw: '',
  });

  const [error, setError] = useState('');
  const {psw} = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: value});
  };

  const isValidForm = () => {
    if (psw.length < 8) {
      return updateError('password incorrect', setError);
    } else {
      auth()
        .signInWithEmailAndPassword(email, psw)
        .then(response => {
          navigation.navigate('Home');
        })
        .catch(error => {
          alert(error.message);
        });
    }
  };

  return (
    <View
      style={styles.containerAll}
      onResponderRelease={onRelease}
      onStartShouldSetResponder={shouldSetResponse}>
      <BgImg />
      <BackBtn
        onClickBackBtn={() => navigation.navigate('Hi')}
        textHeader={'Login'}
      />
      <View style={styles.containerSecond}>
        <View style={styles.blurContainer}>
          <View style={styles.SecondInContainer}></View>
          {error ? <Text style={styles.ErrorText}>{error}</Text> : null}
          <View style={styles.inputView}>
            <CustomInput
              value={psw}
              onchangetext={value => handleOnChangeText(value, 'psw')}
              name="Password"
              type="default"
              secure={hidePass}
            />
            <Text
              style={styles.inputText}
              onPress={() => setHidePass(!hidePass)}>
              {hidePass ? 'View' : 'Hide'}
            </Text>
          </View>
          <CustomBtn
            isButtonAble={psw.length > 0}
            click={() => isValidForm()}
            text="Continue"
          />
          <ForgotPassword
            onClickForgotBtn={() => navigation.navigate('Forgot')}
            text="Forgot your password?"
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    alignItems: 'center',
  },
  ErrorText: {
    color: 'red',
    fontSize: 18,
    alignItems: 'center',
  },
  containerAll: {
    flex: 1,
  },
  containerSecond: {
    flex: 2,
  },
  SecondInContainer: {
    position: 'absolute',
    opacity: 0.8,
    borderRadius: 20,
    backgroundColor: '#2D2B2C',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  blurContainer: {
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 20,
  },
  textOrStyle: {
    color: '#ffff',
    fontSize: 19,
  },
  SignUpContainer: {
    flexDirection: 'row',
    width: '90%',
    paddingVertical: 10,
  },
  fontSizeColor: {
    fontSize: 19,
    color: '#ffff',
  },
  textSignUp: {
    color: '#20B98D',
    fontSize: 19,
    fontWeight: '900',
    marginHorizontal: 5,
  },
  inputText: {
    color: '#000',
    position: 'absolute',
    top: 28,
    right: 40,
    fontSize: 17,
  },
});
export default Login;
