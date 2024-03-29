import {View, Text, SafeAreaView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {icons} from '../utility';

const Navbar = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: '#1D3B54',
        height: 100,
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <SafeAreaView>
        <Text style={{fontSize: 20, color: 'snow', marginTop: 10}}>
          {title}
        </Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={icons.back}
            style={{width: 30, height: 30, tintColor: 'snow'}}
          />
        </TouchableOpacity> */}
      </SafeAreaView>
    </View>
  );
};

export default Navbar;
