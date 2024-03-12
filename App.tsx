import React, { useState } from 'react'
import { SafeAreaView, View, Text, Button, StyleSheet, useColorScheme, Switch } from 'react-native'

export default function App() {
  const [count, setCount] = useState(0)

  let isDarkMode = useColorScheme() === 'dark'
  const changeTheme = () => {
    isDarkMode !== isDarkMode
  }
  const styles = StyleSheet.create({
    main: {
      backgroundColor: isDarkMode ? 'white' : 'black',

    },
    counter: {
      color: isDarkMode ? 'black' : 'white',
      fontSize: 50,
    },
    heading: {
      color: isDarkMode ? 'black' : 'white',
      fontSize: 45,
      fontFamily: 'serif'
    }
  })


  return (
    <SafeAreaView  >
      <View style={styles.main}>
        <Text style={styles.heading}> Counter App</Text>
        <Switch
          onChange={changeTheme}
        >


        </Switch>
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

