import { useNavigation } from '@react-navigation/native';
import { TransitionPresets } from '@react-navigation/stack';
import { addSimpson } from '@redux/actions';
import { GenericNavigationProps } from '@routes/types';
import React, { memo, useLayoutEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

const AddPage = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation<GenericNavigationProps>();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const [name, setName] = useState<null | string>(null);
  const [job, setJob] = useState<null | string>(null);
  const [about, setAbout] = useState<null | string>(null);
  const [image, setImage] = useState<null | string>(null);

  useLayoutEffect(() => {
    setOptions({
      title: 'Add New Character',
      headerShown: true,
      headerTitleAlign: 'center',
      ...TransitionPresets.SlideFromRightIOS,
    });
  }, [setOptions]);

  return (
    <View style={{ flex: 1, alignItems: 'center', paddingTop: 20, paddingHorizontal: 20 }}>
      <View style={{ width: '100%', marginBottom: 10 }}>
        <Text>Name username</Text>
        <TextInput
          value={name ?? ''}
          onChangeText={setName}
          placeholder="Enter name & surname"
          style={{
            height: 40,
            paddingHorizontal: 10,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            width: '100%',
            backgroundColor: 'white',
          }}
        />
      </View>
      <View style={{ width: '100%', marginBottom: 10 }}>
        <Text>Job title</Text>
        <TextInput
          value={job ?? ''}
          onChangeText={setJob}
          placeholder="Enter job title"
          style={{
            height: 40,
            paddingHorizontal: 10,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            width: '100%',
            backgroundColor: 'white',
          }}
        />
      </View>
      <View style={{ width: '100%', marginBottom: 10 }}>
        <Text>About him/her</Text>
        <TextInput
          multiline={true}
          value={about ?? ''}
          onChangeText={setAbout}
          placeholder="Enter about him or her"
          style={{
            height: 150,
            flexDirection: 'row',
            paddingHorizontal: 10,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            width: '100%',
            textAlignVertical: 'top',
          }}
        />
      </View>
      <View style={{ width: '100%', marginBottom: 10 }}>
        <Text>Image link</Text>
        <TextInput
          value={image ?? ''}
          onChangeText={setImage}
          placeholder="Enter image link"
          style={{
            height: 40,
            paddingHorizontal: 10,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            width: '100%',
            backgroundColor: 'white',
          }}
        />
      </View>
      <View style={{ width: '100%', marginBottom: 10 }}>
        <Pressable
          onPress={() => {
            dispatch(addSimpson({ name, job, description: about, avatar: image }));
            navigate('Home');
          }}
          style={{
            width: '100%',
            height: 40,
            backgroundColor: 'green',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'white' }}>Add Character</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default memo(AddPage);
