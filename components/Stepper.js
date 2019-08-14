import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function Stepper (props){
    const { value, onDecrement, onIncrement, unit } = props;

    return (
      <View>
        <View>
          <TouchableOpacity onPress={onDecrement}>
            <FontAwesome name="minus" size = {30} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onIncrement}>
            <FontAwesome name="plus" size = {30} color={'black'} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>{value}</Text>
          <Text>{unit}</Text>
        </View>
      </View>
    )
}