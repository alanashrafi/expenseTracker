import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Navbar from '../components/Navbar';
import SelectCategory from '../components/SelectCategory';
import uuid from 'react-native-uuid';
import Data from '../data';
import {icons} from '../utility';
import {useExpense} from '../context/expense';

const Add = () => {
  const [expense, setExpense] = useState();
  const [title, setTitle] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const navigation = useNavigation();
  const {addExpense} = useExpense();

  // const addExpense = () => {
  //   Data.push({
  //     id: uuid.v4(),
  //     category: selectedCategory.name,
  //     icon: icons.kids,
  //     title: title,
  //     total: expense,
  //   });
  //   setExpense('');
  //   setTitle('');
  //   setSelectedCategory('');
  //   navigation.navigate('Home');
  // };
  const addHandler = () => {
    addExpense(
      selectedCategory.name,
      icons[selectedCategory.name.toLowerCase()],
      title,
      expense,
    );
    setTitle('');
    setExpense('');
    setSelectedCategory('');
    navigation.navigate('Home');
  };
  console.log(selectedCategory);

  return (
    <View style={{flex: 1}}>
      <Navbar title={'Add Expense'} />

      <SafeAreaView style={{alignItems: 'center'}}>
        <TextInput
          keyboardType="numeric"
          placeholder="Amount"
          style={{
            width: Dimensions.get('window').width - 100,
            backgroundColor: 'lavender',
            height: 50,
            borderRadius: 50,
            paddingHorizontal: 20,
            marginBottom: 20,
            color: 'dimgray',
            fontSize: 20,
          }}
          maxLength={10}
          onChangeText={setExpense}
          value={expense}
        />
        <TextInput
          placeholder="Title"
          style={{
            width: Dimensions.get('window').width - 50,
            backgroundColor: 'lavender',
            height: 50,
            borderRadius: 10,
            paddingHorizontal: 20,
            marginBottom: 20,
            fontSize: 20,
            color: 'dimgray',
          }}
          onChangeText={setTitle}
          value={title}
        />

        <View />
        <View
          style={{
            marginHorizontal: 20,
            borderRadius: 20,
            padding: 10,
            alignItems: 'center',
          }}>
          <Text style={{color: 'grey'}}>Select a Category</Text>

          <SelectCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </View>

        <TouchableOpacity
          style={{
            width: Dimensions.get('window').width - 50,
            height: 50,
            backgroundColor: '#1D3B54',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            marginTop: 20,
          }}
          onPress={addHandler}>
          <Text style={{color: 'snow', fontSize: 18}}>Add Expense</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default Add;
