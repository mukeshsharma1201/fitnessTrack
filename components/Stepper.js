import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { white, purple, gray } from '../utils/colors';

export default function Stepper (props){
    const { value, onDecrement, onIncrement, unit } = props;

    return (
      <View style={style.row}>
        <View style={style.stepperContainer}>
          <TouchableOpacity onPress={onDecrement} style={[style.iosBtn, {borderTopRightRadius:0, borderBottomRightRadius:0}]}>
            <FontAwesome name="minus" size = {30} color={purple} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onIncrement} style={[style.iosBtn, {borderTopLeftRadius:0, borderBottomLeftRadius:0}]}>
            <FontAwesome name="plus" size = {30} color={purple} />
          </TouchableOpacity>
        </View>
        <View style={style.metricCounterContainer}>
          <Text style={style.valueText}>{value}</Text>
          <Text style={style.unitText}>{unit}</Text>
        </View>
      </View>
    )
}

const style = StyleSheet.create({
  row :{
    flexDirection : "row",
    flex : 1,
    alignItems : "center",
    justifyContent: "space-between"
  },
  stepperContainer : {
    flexDirection : "row",
    alignItems : "center",
    justifyContent: "center"
  },
  iosBtn :{
    backgroundColor : white,
    borderColor : purple,
    borderWidth : 1,
    borderRadius : 3,
    padding : 4,
    paddingLeft : 25,
    paddingRight : 25
  },
  metricCounterContainer :{
    width : 85,
    justifyContent : "center",
    alignItems : "center",
  },
  valueText:{
    fontSize : 24,
    textAlign : "center"
  },
  unitText:{
    fontSize : 18,
    color : gray
  }

})