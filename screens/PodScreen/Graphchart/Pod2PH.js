import React, { Component } from 'react'
import { View } from 'react-native'
import { Defs, LinearGradient, Stop } from 'react-native-svg'
import { LineChart, YAxis, Grid } from 'react-native-svg-charts'
import styles from '../../../Styles'

class Pod2PH extends Component {

    render() {
        const { box } = styles

        const data = [ 6.7, 6.8, 6.9, 6.8, 6.7, 6.8, 6.9, 7.0, 7.0, 6.9, 7.0 ]
        const contentInset = { top: 20, bottom: 20 }

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'#2675a6'}/>
                    <Stop offset={'100%'} stopColor={'#3bb4ff'}/>
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
                        numberOfTicks={ 5 }
                        formatLabel={ value => `${value} pH` }
                        min={6}
                        max={8}
                    />
                    <LineChart
                        style={{ flex: 1, marginLeft: 16 }}
                        data={ data }
                        svg={{ stroke: 'rgb(134, 65, 244)' }}
                        contentInset={ contentInset }
                        svg={{
                            strokeWidth: 2,
                            stroke: 'url(#gradient)',
                        }}
                        yMin={6}
                        yMax={8}
                    >
                        <Grid/>
                        <Gradient/>
                    </LineChart>
                </View>
            </View>
        )
    }

}

export default Pod2PH;