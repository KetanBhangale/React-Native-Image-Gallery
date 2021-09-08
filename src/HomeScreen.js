import React from 'react'
import { Image, ScrollView, View, Dimensions, Text, TouchableOpacity } from 'react-native'
import images from './Images'

const deviceWidth = Dimensions.get(`window`).width
const deviceHeight = Dimensions.get(`window`).height
const HomeScreen = (props) => {

    return (
        <View style={{ backgroundColor: 'gray' }}>
            <ScrollView >
                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        images.map((image, index) => (
                            <TouchableOpacity key={index}
                                onPress={() =>
                                    props.navigation.navigate('FullScreenImage', { newsUrl: image.url })
                                }>
                             
                                <View>
                                    <Image
                                        source={image.url}
                                        style={{ width: deviceWidth / 3 - 10, height: deviceHeight / 3, borderRadius: 10, margin: 5 }}></Image>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        </View>


    );

}

export default HomeScreen;