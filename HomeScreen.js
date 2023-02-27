import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";

const HomeScreen = () => {
    const Data = [ 
        {
            id:Math.random(),
            name:'Ahsan',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw-D3BJbkVJqd86mP1k2lT2hTvkROKbBcBQ&usqp=CAU',
        },
        {
            id:Math.random(),
            name:'ALiza',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw-D3BJbkVJqd86mP1k2lT2hTvkROKbBcBQ&usqp=CAU',
        },
        {
            id:Math.random(),
            name:'Ali',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw-D3BJbkVJqd86mP1k2lT2hTvkROKbBcBQ&usqp=CAU',
        },
        {
            id:Math.random(),
            name:'Ahmed',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw-D3BJbkVJqd86mP1k2lT2hTvkROKbBcBQ&usqp=CAU',

        },
        {
            id:Math.random(),
            name:'Ayesha',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw-D3BJbkVJqd86mP1k2lT2hTvkROKbBcBQ&usqp=CAU',
        },
        {
            id:Math.random(),
            name:'Ayesha',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw-D3BJbkVJqd86mP1k2lT2hTvkROKbBcBQ&usqp=CAU',
        },
        {
            id:Math.random(),
            name:'Ayesha',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw-D3BJbkVJqd86mP1k2lT2hTvkROKbBcBQ&usqp=CAU',
        },
        {
            id:Math.random(),
            name:'Ayesha',
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlw-D3BJbkVJqd86mP1k2lT2hTvkROKbBcBQ&usqp=CAU',
        },

    ];
    return(
        <View style={{flex:1, backgroundColor:"white"}}>
            <FlatList
            style={{marginTop:20}}
            data={Data}
            keyExtractor={(item,index) => index.toString()}
            renderItem={(itemData)=>{
                return(
                    <ImageBackground
                    imageStyle={{borderRadius:10}} 
                    resizeMode="cover"
                    source={{uri: itemData.item.image}}
                    style={{height:100,width:"96.5%",marginBottom:10,marginHorizontal:10,justifyContent:"flex-end",alignItems:"center"}}>
                        <Text style={{fontSize:15,fontWeight:"bold",color:"white"}}>
                            {itemData.item.name}
                        </Text>
                    </ImageBackground>
                )
            }}
            />
        </View>
    );
};
export default HomeScreen;