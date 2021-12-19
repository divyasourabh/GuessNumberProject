import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.textHeading}>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <FastImage
          // source={require('../assets/images/success.png')}
          source={{
            uri: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_495142964_198701.jpg',
          }}
          style={styles.image}
          resizeMode="cover"></FastImage>
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  },
  highlight: {
    color: colors.primary,
  }
});

export default GameOverScreen;
