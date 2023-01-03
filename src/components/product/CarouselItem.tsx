import React from "react";
import { Image, StyleSheet } from "react-native";
import { hp, wp } from "../../utils/screenResize";

interface IProps{
  url:string
}

const CarouselItem=(props:IProps)=>{
   
    return(
        <Image
          key={'image-' + props.url}
          source={{uri:props.url}}
          resizeMode="cover"
          style={{
            width:wp(100),
            height:'100%',
          }} 
        />
    )
}

const styles=StyleSheet.create({

})

export default CarouselItem;