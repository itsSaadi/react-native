import React, { useState } from 'react'
import { SafeAreaView, View, Text, Button, StyleSheet, useColorScheme, Switch, ScrollView, Image } from 'react-native'
import Counter from './components/counter'
import simpleCards from './components/simpleCards'
import SimpleCards from './components/simpleCards'
import ScrollableCards from './components/scrollableCards'
import ImageCards from './components/imageCards'

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Counter />
        <SimpleCards />
        <ScrollableCards />
        <ImageCards />
      </ScrollView>
    </SafeAreaView>
  )
}

