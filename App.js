import { View, Text , StatusBar , Image } from 'react-native'
import React,{useEffect} from 'react'

import RootNavigator  from './src/navigation/rootNavigator'


const App = () => {

  useEffect(() => {
    StatusBar.setBarStyle('dark-content', true)
    StatusBar.setBackgroundColor("#ffffff")
  })
  
  return <RootNavigator /> ;
  
}

export default App