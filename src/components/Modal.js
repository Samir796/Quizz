import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Modal from 'react-native-modal';
import text from './Text';
function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.allContainer}>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.Privacy}>Terms of Service and Privacy Policy</Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} style={styles.modalContainer}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.ViewContainer}>
              <TouchableOpacity onPress={toggleModal} style={styles.ButtonHide}>
                <Text style={styles.textColorBtn}>Ok</Text>
              </TouchableOpacity>
              <Text style={styles.termsHeadText}>AGREEMENT TO TERMS</Text>
              <Text>{text}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  allContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    padding: 30,
    alignItems: 'center',
  },

  ViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textOne: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '700',
    color: '#8d898a',
  },
  textTwo: {
    lineHeight: 26,
    color: '#4e9ec3',
  },
  ButtonHide: {
    width: '40%',
    height: 40,
    marginVertical: 20,
    backgroundColor: '#20B98D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  textColorBtn: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  termsHeadText: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '700',
    color: '#20B98D',
    paddingVertical: 20,
  },
  Privacy: {
    color: '#2DAB87',
    fontSize: 17,
    fontWeight: '700',
  },
});

export default ModalTester;
