import React from 'react'
import { Text, View } from 'react-native'
import {default as Slider} from '@react-native-community/slider'

export default function CustomSlider (props){
    const { value = 0, min = 0, max = 10, step = 1, unit, onChange } = props;
    
    return (
      <View>
        <Slider
          value = {value}
          minimumValue = {min}
          maximumValue = {max}
          step = {step}
          onValueChange = { onChange }
        />
        <View>
          <Text>{value}</Text>
          <Text>{unit}</Text>
        </View>
      </View>
    )
}