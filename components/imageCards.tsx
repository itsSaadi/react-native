import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageCards = () => {
    return (
        <View >
            <Text>Image Cards</Text>
            <View style={styles.main}    >
                <Image source={{
                    uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/c2/bb/ed/noor-mahal-at-night.jpg?w=1200&h=-1&s=1s'
                }}
                    style={styles.image} />
            </View>
        </View>
    )
}

export default ImageCards

const styles = StyleSheet.create({
    main: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 300

    }
})