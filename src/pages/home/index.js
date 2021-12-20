import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './Styles';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.homeWrap}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.createBtn}
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}>
        <Text style={styles.btnTxt}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}
