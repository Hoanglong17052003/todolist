import { View, Text } from 'react-native'
import React from 'react'
import { fontFamilies } from './src/constants/fontFamilies'

const App = () => {
  return (
    <View>
      <Text style={{fontFamily: 'Outfit-Black'}}>App</Text>
      <Text style={{fontFamily: 'Outfit-Black'}}>App</Text>
      <Text style={{fontFamily: 'Outfit-Black'}}>App</Text>
      <Text style={{fontFamily: fontFamilies.bold}}>App</Text>
      <Text >App</Text>

    </View>
  )
}

export default App