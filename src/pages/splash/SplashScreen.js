import { View, Text , StatusBar , Image } from 'react-native'
import React from 'react'

import { styles } from './Style'

const splashimage = require('../../../assets/splashimages/heart.png')

const SplashScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <StatusBar
        backgroundColor="#f2f2f2"
        barStyle = "dark-content"
      />
      <Image
        resizeMode='cover'
        source={splashimage}
        style={styles.imageStyle}
      />
      <Text style={styles.nameStyle}>Wai Yan Maing</Text>
      
    </View>
  )
}

export default SplashScreen