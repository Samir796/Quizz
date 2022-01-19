import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Keyboard,
  Alert,
} from 'react-native';
import BgImg from '../../components/BgImage';
import CustomBtn from '../../components/CustomButton';
import CustomInput from '../../components/CustomTextInput';
import auth from '@react-native-firebase/auth';
import BackBtn from '../../components/BackBtn';
import ModalTester from '../../components/Modal';
import firestore from '@react-native-firebase/firestore';

const updateError = (error, stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('');
  }, 2500);
};

const isValidEmail = value => {
  const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return regx.test(value);
};

const SignUp = ({navigation}) => {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();

  const [error, setError] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isButtonAble, setButtonAble] = useState(false);

  const ref = firestore().collection('User');

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });
    return unsubscribe;
  }, []);

  const isValidForm = () => {
    if (!isValidEmail(email) & (password.length < 6) & (name.length === 0)) {
      return updateError(
        'email & password incorrect, name is required',
        setError,
      );
    } else if (!isValidEmail(email)) {
      updateError('email incorrect', setError);
    } else if (name.length === 0) {
      updateError('name is required', setError);
    } else if (password.length < 6) {
      updateError('password incorrect', setError);
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
          return ref.doc(userCredentials.user.uid).set({
            Name: name,
          });
          // const user = userCredentials.user;
          // console.log(user.email);
        })
        .catch(error => alert(error.message));
    }
  };

  useEffect(() => {
    setButtonAble(email.length > 0 && password.length > 0);
  }, [email, password]);

  return (
    <>
      <SafeAreaView style={styles.safeContainer} />
      <View
        style={styles.containerAll}
        onResponderRelease={onRelease}
        onStartShouldSetResponder={shouldSetResponse}>
        <BgImg />
        <View style={styles.containerAll}>
          <BackBtn
            onClickBackBtn={() => navigation.navigate('Hi')}
            textHeader={'Sign Up'}
          />
          <View style={styles.containerSecond}>
            <View style={styles.blurContainer}>
              <View style={styles.SecondInContainer}></View>
              {error ? <Text style={styles.ErrorText}>{error}</Text> : null}
              <CustomInput
                name="Email "
                type="email-address"
                value={email}
                onchangetext={setEmail}
              />
              <CustomInput
                name="Name "
                type="default"
                value={name}
                onchangetext={setName}
              />
              <View style={styles.inputView}>
                <CustomInput
                  name="Password"
                  type="default"
                  value={password}
                  onchangetext={setPassword}
                  secure={hidePass}
                />
                <Text
                  style={styles.inputText}
                  onPress={() => setHidePass(!hidePass)}>
                  {hidePass ? 'View' : 'Hide'}
                </Text>
              </View>
              <View style={styles.containerTerm}>
                <Text style={styles.textStyle}>
                  By selecting Agree and continue below,
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.textStyle}>I agree to </Text>
                  <ModalTester />
                </View>
              </View>
              <CustomBtn
                isButtonAble={isButtonAble}
                text="Agree and continue"
                click={isValidForm}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  ErrorText: {
    color: 'red',
    fontSize: 18,
    alignItems: 'center',
  },
  safeContainer: {
    flex: 0,
    backgroundColor: 'white',
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
  containerTerm: {
    alignItems: 'flex-start',
    width: '90%',
    marginVertical: 20,
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
  textStyle: {
    color: 'white',
    fontSize: 16,
  },
  inputView: {
    width: '100%',
    alignItems: 'center',
  },
  inputText: {
    color: '#000',
    position: 'absolute',
    top: 26,
    right: 40,
    fontSize: 17,
  },
});
export default SignUp;
