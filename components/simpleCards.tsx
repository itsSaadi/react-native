import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SimpleCards = () => {
    return (
        <View >
            <Text style={styles.heading}>
                Simple Card
            </Text>
            <View style={styles.main}>
                <View style={styles.childDiv}>
                    <Text style={[styles.box, styles.red]}>Red</Text>
                </View>
                <View>
                    <Text style={[styles.box, styles.green]}>Green</Text>
                </View>
                <View>
                    <Text style={[styles.box, styles.blue]}>Blue</Text>
                </View>
            </View>
        </View>
    )
}

export default SimpleCards

const styles = StyleSheet.create({

    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 8,
        marginVertical: 8
    },
    main: {
        gap: 20,
        marginVertical: 8,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    childDiv: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    box: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        color: 'white'
    },
    red: { backgroundColor: 'red' },
    green: { backgroundColor: 'green' },
    blue: { backgroundColor: 'blue' },


})