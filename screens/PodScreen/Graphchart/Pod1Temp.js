import React, { Component } from 'react'
import { View } from 'react-native'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import styles from '../../../Styles'
import * as shape from 'd3-shape'

class Pod1Temp extends Component {

    render() {
        const { box } = styles

        const data = [ 26, 26, 25, 26, 27, 28, 26, 26, 27, 25, 24, 26, 26, 28, 27 ]
        const contentInset = { top: 20, bottom: 20 }

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'#397b4c'}/>
                    <Stop offset={'100%'} stopColor={'#38ff72'}/>
                </LinearGradient>
            </Defs>
        )

        return (
            <View style={box}>
                <View style={{flexDirection: 'row', height: 230, padding: 10}}>
                    <YAxis
                        data={data}
                        contentInset={ contentInset }
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={ 10 }
                        formatLabel={ value => `${value}ºC` }
                        min={22}
                        max={30}
                    />
                    <LineChart
                        style={{ flex: 1, marginLeft: 16 }}
                        data={ data }
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        contentInset={ contentInset }
                        curve={shape.curveNatural}
                        svg={{
                            strokeWidth: 2,
                            stroke: 'url(#gradient)',
                        }}
                        yMin={22}
                        yMax={30}
                    >
                        <Grid/>
                        <Gradient/>
                    </LineChart>
                </View>
            </View>
        )
    }

}

export default Pod1Temp;