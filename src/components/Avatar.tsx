import React from 'react';
import {Image} from 'react-native';
import {wp, hp} from './../utils/screenResize';

const Avatar = props => {
  const photo =props.photoFile

  if (!!photo) {
    return (
      <Image
        source={{uri: photo}}
        style={[
          {width: wp(25), height: wp(25), borderRadius: wp(100)},
          props.imageStyle,
        ]}
      />
    );
  } else {
    return (
      <Image
        source={props.photoFile}
        style={[
          {width: wp(25), height: wp(25), borderRadius: wp(100)},
          props.imageStyle,
        ]}
      />
    );
  }
};

export default React.memo(Avatar);
