import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Platform} from 'react-native';
import {Colors} from '../../themes';
import {wp, hp} from '../../utils/screenResize';
import {Text} from '../templates/Text';
import CarouselItem from './CarouselItem';

interface IProps {
  images?: any[];
}
const PlaceCarousel = ({images}: IProps) => {
  const [activeImage, setActiveImage] = useState(0);

  const onChange = (nativeEvent: any) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== activeImage) {
        setActiveImage(slide);
      }
    }
  };

  const noData_ = () => {
    return (
      <View style={styles.noDataContainer}>
        <Text size={wp(4)} type="Montserrat" style={{fontWeight: '700'}}>
         {''}
        </Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        pagingEnabled
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        onScroll={({nativeEvent}) => onChange(nativeEvent)}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={images}
        keyExtractor={(item,index)=>'index+-'+index}
        renderItem={({item, index}) => <CarouselItem url={item}/>}
        ListEmptyComponent={noData_}></FlatList>

      <View style={styles.wrapDot}>
        {images !== undefined &&
          images.length > 1 &&
          images?.map((e, index) => (
            <Text
              key={index}
              style={[
                styles.dotStyle,
                {
                  backgroundColor:
                    activeImage === index ? '#F6333B' : Colors.White,
                },
              ]}></Text>
          ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({

  wrapDot: {
    position: 'absolute',
    bottom: wp(0),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotStyle: {
    margin: wp(1),
    bottom:Platform.select({ios:wp(6),android:wp(5)}) ,
    width: 37,
    height: 3,
    borderRadius: 5,
  },
  noDataContainer: {
    width: wp(100),
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});

export default PlaceCarousel;
