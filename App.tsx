import React, { useState } from 'react'
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <SafeAreaView>
      <View>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  counter: {
    color: 'red',
    fontSize: 50,
  },
  heading: {
    fontSize: 45,
    color: 'purple',
    fontFamily: 'serif'
  }

})