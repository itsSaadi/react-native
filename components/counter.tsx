import { Button, StyleSheet, Switch, Text, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)


    return (
        <View style={styles.main}>
            <Text style={styles.heading}> Counter App</Text>
            <Text style={styles.counter}>
                {count}
            </Text>
            <Button
                onPress={() => setCount(count + 1)}
                title="Increment"
                color="green"
            />
            <Button
                disabled={count > 0 ? false : true}
                onPress={() => setCount(count - 1)}
                title="Decrement"
                color="red"
            />
            <Button
                disabled={count > 0 ? false : true}
                onPress={() => setCount(0)}
                title="Reset"
                color="orange"
            />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'black',

    },
    counter: {
        color: 'white',
        fontSize: 50,
        margin:8
    },
    heading: {
        color: 'aqua',
        fontSize: 45,
        fontFamily: 'serif'
    }
})