import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import { deleteSimpson, downSimpson, getSimpsonsListRequest, upSimpson } from '@redux/reqres/actions';
import { simpsonsLoading, simpsonsList } from '@redux/reqres/selectors';
import { Simpson } from '@redux/reqres/types';
import { GenericNavigationProps } from '@routes/types';
import { Add, ArrowCircleDown, ArrowCircleUp, Trash } from 'iconsax-react-native';
import React, { FC, memo, useCallback, useLayoutEffect } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles';

const HomePage: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<GenericNavigationProps>();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const list = useSelector(simpsonsList);
  const loading = useSelector(simpsonsLoading);
  console.log('list', list);
  const onGotoSimpsonDetails = useCallback(
    (simpsonId: any) => {
      navigation.navigate('Detail', {
        simpsonId,
      });
    },
    [navigation],
  );

  useLayoutEffect(() => {
    setOptions({
      title: 'Simpsons',
      headerShown: true,
      headerTitleAlign: 'center',
      ...TransitionPresets.SlideFromRightIOS,
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('Add')}>
          <Add color="black" />
        </Pressable>
      ),
    });
  }, [setOptions]);

  const renderItem = useCallback(
    ({ item, index }: { item: Simpson; index: number }) => (
      <Pressable onPress={() => onGotoSimpsonDetails(item?.id)} key={item?.id}>
        <View style={styles.itemContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{index + 1}</Text>
            <Image
              source={item.avatar !== null ? { uri: item?.avatar } : require('../../assets/no-image-icon.png')}
              style={{ width: 40, height: 40 }}
              resizeMode={'contain'}
            />
            <Text>{item?.name}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Pressable onPress={() => dispatch(upSimpson(item?.id))}>
              <ArrowCircleUp color="green" />
            </Pressable>
            <Pressable onPress={() => dispatch(downSimpson(item?.id))}>
              <ArrowCircleDown color="red" />
            </Pressable>
            <Pressable onPress={() => dispatch(deleteSimpson(item?.id))}>
              <Trash color="black" />
            </Pressable>
          </View>
        </View>
      </Pressable>
    ),

    [onGotoSimpsonDetails],
  );

  const onLoadUsersList = useCallback(() => {
    dispatch(getSimpsonsListRequest());
  }, [dispatch]);

  useFocusEffect(
    useCallback(() => {
      onLoadUsersList();
    }, [onLoadUsersList]),
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList data={list} renderItem={renderItem} refreshing={loading} />
    </View>
  );
};

export default memo(HomePage);
