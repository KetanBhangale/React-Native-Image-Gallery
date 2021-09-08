import React from 'react'
import { Image, View, Dimensions } from 'react-native'

const deviceWidth = Dimensions.get(`window`).width
const deviceHeight = Dimensions.get(`window`).height

FullScreenImage = (props) => {


    return (
                            <View>
                                    <Image
                                        source={props.route.params.newsUrl}
                                        style={{ width: deviceWidth-10, height: deviceHeight-10, borderRadius: 10, margin: 5, marginTop:0 }}></Image>
                                </View>
    )


}


export default FullScreenImage;