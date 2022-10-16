import { useNavigation } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import { findSimpsonById } from '@redux/reqres/selectors';
import { GenericNavigationProps } from '@routes/types';
import React, { memo, useLayoutEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

const DetailPage = (props: any) => {
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const simpson = useSelector(findSimpsonById(props.route.params.simpsonId));
  console.log('detail', simpson);
  useLayoutEffect(() => {
    setOptions({
      title: 'Details',
      headerShown: true,
      headerTitleAlign: 'center',
      ...TransitionPresets.SlideFromRightIOS,
    });
  }, [setOptions]);

  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20, paddingHorizontal: 20 }}>
      <Image
        source={simpson?.avatar !== null ? { uri: simpson?.avatar } : require('../../assets/no-image-icon.png')}
        style={{ width: 200, height: 250 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 22, fontWeight: '700', color: 'black' }}>{simpson?.name}</Text>
      <Text style={{ fontSize: 18, fontWeight: '500', color: 'gray' }}>{simpson?.job}</Text>
      <Text style={{ fontSize: 14, color: 'gray', marginTop: 20 }}>{simpson?.description}</Text>
    </View>
  );
};

export default memo(DetailPage);
