import React from 'react'
import { SafeAreaView, View, StyleSheet, Text,Image,Animated } from 'react-native'

//constants
import { images, theme } from '../../constants'
const { onboarding1, onboarding2, onboarding3 } = images

//Theme
const { COLORS, FONTS, SIZES } = theme

//Dummy Data
const onBoardings = [
    {
        title: "Let's Travelling",
        description: "Sit et laborum minim eiusmod laborum voluptate.",
        img: onboarding1
    },
    {
        title: "Navigation",
        description: "Sit et laborum minim eiusmod laborum voluptate.",
        img: onboarding2
    },
    {
        title: "Destination",
        description: "Sit et laborum minim eiusmod laborum voluptate.",
        img: onboarding3
    },
]

const OnBoarding = () => {
    //Render
    function renderContent() {
        return(
        <Animated.ScrollView
            horizontal
            
        >
           
            {onBoardings.map((item, index) => {
                <View
                    key={index}
                >
                    <View>
                        <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width:100,
                            height:100
                        }}
                        />
                    </View>
                </View>
            })}
        </Animated.ScrollView>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderContent()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: COLORS.white
    }
})
export default OnBoarding