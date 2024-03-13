import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScrollableCards = () => {
    return (
        <View>
            <Text style={styles.heading}>
                Scrollable Cards
            </Text>
            <ScrollView horizontal={true} style={styles.scroll}>
                <View style={styles.main}>
                    <View style={styles.childDiv}>
                        <Text style={styles.box}></Text>
                    </View>
                    <View>
                        <Text style={styles.box}></Text>
                    </View>
                    <View>
                        <Text style={styles.box}></Text>
                    </View>
                    <View>
                        <Text style={styles.box}></Text>
                    </View>
                    <View>
                        <Text style={styles.box}></Text>
                    </View>
                    <View>
                        <Text style={styles.box}></Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default ScrollableCards

const styles = StyleSheet.create({
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 8,
        marginVertical: 8
    },
    main: {
        gap: 10,
        marginVertical: 8,
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    scroll: {
        marginHorizontal: 10,
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
        backgroundColor: 'lightgray'
    },
    red: { backgroundColor: 'red' },
    green: { backgroundColor: 'green' },
    yellow: { backgroundColor: 'yellow' },


})