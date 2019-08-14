import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { getMetricMetaInfo, timeToString } from '../utils/helpers'
import Stepper from './Stepper'
import CustomSlider from './Slider'
import DateHeader from './DateHeader'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TextButton from './TextButton'

function SubmitButton ( { onPress } ){
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Text>Submit</Text>
        </TouchableOpacity>
    )
}

export default class AddEntry extends Component {
    
    //initial local state
    state = {
        run : 0,
        bike : 0,
        swim : 0,
        sleep : 0,
        eat : 0
    }

    increment = (metric) => {
        const { max, step } = getMetricMetaInfo(metric); 
        this.setState((currState) => {
            const count  = currState[metric] + step;    
            return {
                ...currState,
                [metric] : count > max ? max : count
            }
        })
    }

    decrement = (metric) => {   
        this.setState((currState) => {
            const count  = currState[metric] - getMetricMetaInfo(metric).step;
            return {
                ...currState,
                [metric] : count < 0 ? 0 : count
            }
        })
    }

    slide = (metric, value) => {
        this.setState(() => ({
            [metric]: value
        }))
    }

    submit = () => {
        const key = timeToString()
        //update the state
        console.log('this in submit: ',this);
        this.setState(() => ({
            run : 0,
            bike : 0,
            swim : 0,
            sleep : 0,
            eat : 0
        }))

        //Store data in redux

        //Navigate to home
    }

    reset = () => {
        const key = timeToString()
        //Update redux
        //Navigate to home
        //update DB
    }

    render(){
        const metaInfo = getMetricMetaInfo()
        if(this.props.alreadyLogged){
            return (
                <View>
                    <FontAwesome 
                        name = "smile-o"
                        size = {100}
                        color = 'black'
                    />
                    <Text>You have already Logged in the data for today</Text>
                    <TextButton onPress={this.reset}>
                        Reset
                    </TextButton>
                </View>
            )
        }

        return (
            <View>
                <DateHeader date={(new Date()).toLocaleDateString()} />
                {Object.keys(metaInfo).map((key) => {
                    const { getIcon, type, ...rest } =  metaInfo[key]
                    const value = this.state[key]

                    return (
                        <View key={key}>
                            {getIcon()}
                            {type === 'stepper' 
                                ?   <Stepper 
                                        value = {value}
                                        onIncrement = {()=>{this.increment(key)}}
                                        onDecrement = {()=> {this.decrement(key)}}
                                        {...rest}
                                    />
                                :   <CustomSlider
                                        value = {value}
                                        step = {metaInfo[key]['step']}
                                        onChange = {(value) => { this.slide(key, value) }}
                                        {...rest}
                                    />
                            }
                        </View>
                    )
                })}
                <SubmitButton onPress={() => this.submit()} />
            </View>
        )
    }
}