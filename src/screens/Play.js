import { 
  View, 
  StyleSheet, 
  TouchableOpacity,
  Text, Dimensions, 
  ImageBackground,
  Animated, 
  Image, 
  Alert  } from "react-native";
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { images } from "../assets";

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Play = () => {
  const navigation = useNavigation();

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(5);
  const [position, setPostition] = useState(
    {top: Math.random() * windowHeight, left: Math.random() * windowWidth}
  )
  const [position1, setPostition1] = useState(
    {top: Math.random() * windowHeight, left: Math.random() * windowWidth}
  )


  useEffect(() => {
    const timeOut = setTimeout(() => {
      if(time > 0){
        setTime(time - 1);
        setPostition({top: Math.random() * windowHeight, left: Math.random() * windowWidth});
        setPostition1({top: Math.random() * windowHeight, left: Math.random() * windowWidth});
      }
      if (time === 0){
        setScore(score + 1);
        setTime(5);
      }
    }, 1000);
    return() => {
      clearTimeout(timeOut);
    }
  },[time]);

  const onClickBackButton = () => {
    navigation.goBack();
  }


  return (
    <ImageBackground style={appStyle.PlayView} source={images.background}>
      <Text style={appStyle.textScore}>{score}</Text>
      <Animated.Image style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: windowWidth * 0.1,
        height: windowWidth * 0.1,
        resizeMode: 'contain',
      }} source={images.firefly} />
      <Animated.Image style={{
        position: 'absolute',
        top: position1.top,
        left: position1.left,
        width: windowWidth * 0.08,
        height: windowWidth * 0.08,
        resizeMode: 'contain',
      }} source={images.firefly} />
      <View style={appStyle.bottomView}>
        <TouchableOpacity onPress={onClickBackButton}>
          <Image source={images.back} style={appStyle.buttonStyle} />
        </TouchableOpacity>
      </View>
      
    </ImageBackground>
  );
};


export const appStyle = StyleSheet.create({
  PlayView: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode: 'cover',
  },
  appBar: {
    flex: 0.1,
    width: '100%',
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  turnView: {
    flexDirection: 'row',
    width: windowWidth * 0.15,
    marginRight: 10,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  centerImage: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreStyle: {
    width: windowWidth * 0.1,
    height: windowWidth * 0.1,
    resizeMode: 'contain',
  },
  turnText: {
    fontSize: windowWidth > 640 ? 30 : 25,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'AllerDisplay',
  },
  textScore: {
    fontSize: windowWidth > 640 ? 70 : 50,
    paddingTop: 30,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'AllerDisplay',
  },
  centerView: {
    marginTop: 20,
    flex: 0.6,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomView: {
    position: 'absolute',
    bottom: '10%',
  },
  backStyle: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    resizeMode: 'contain',
  },
  buttonStyle: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    resizeMode: 'contain',
  }
});

export default Play;