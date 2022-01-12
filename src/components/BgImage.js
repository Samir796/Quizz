import React from 'react';
import {Image, StyleSheet, View, Keyboard, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
const BgImg = () => {
  const shouldSetResponse = () => true;
  const onRelease = () => Keyboard.dismiss();
  return (
    <View
      style={styles.container}
      onResponderRelease={onRelease}
      onStartShouldSetResponder={shouldSetResponse}>
      <Image
        source={require('../assets/image/BgImage.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {width: width, height: '60%'},
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});

export default BgImg;
