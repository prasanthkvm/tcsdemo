import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';

import {styles} from './Styles';

export default function RegisterScreen() {
  const [showPwd, setShowPwd] = useState(true);
  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isSelected, setSelection] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.descTxt} accessible={true}>
          Please provide precise information matching with your ID, This is
          needed for identification purposes when making booking or issuing
          tickets
        </Text>
        <Text>Details Screen</Text>
        <View style={styles.formWrap} accessible={true}>
          <Text style={styles.infoTxt}>First Name</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={null}
            value={null}
            placeholderTextColor="#ccc"
            placeholder="First Name"
          />
          <Text style={styles.infoTxt}>Surname</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={null}
            value={null}
            placeholderTextColor="#ccc"
            placeholder="Surname"
          />
          <Text style={styles.infoTxt}>Email</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={null}
            value={null}
            placeholderTextColor="#ccc"
            placeholder="Email"
          />
          <Text style={styles.infoTxt}>Password</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={null}
            value={null}
            secureTextEntry={showPwd}
            placeholderTextColor="#ccc"
            placeholder="Password"
          />
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap to speak the password"
            onPress={() => {
              showPwd ? setShowPwd(false) : setShowPwd(true);
            }}>
            <Text style={styles.iconWrap}>
              <Icon size={20} color={'#fff'} name="eye-outline" />
            </Text>
          </TouchableOpacity>
          <Text style={styles.infoTxt}>Confirm Password</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={null}
            value={null}
            secureTextEntry={showPwd}
            placeholderTextColor="#ccc"
            placeholder="Confirm Password"
          />
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap to reveal the password"
            onPress={() => {
              showPwd ? setShowPwd(false) : setShowPwd(true);
            }}>
            <Text style={styles.iconWrap}>
              <Icon size={20} color={'#fff'} name="eye-outline" />
            </Text>
          </TouchableOpacity>

          <Text style={styles.infoTxt}>Language</Text>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap to reveal the password"
            style={styles.selectBtn}
            onPress={() => setModalVisible(true)}>
            <Text style={styles.cTxt}>{selectedLanguage}</Text>
          </TouchableOpacity>

          <Text style={styles.infoTxt}>Date Of Birth</Text>
          <TouchableOpacity
            style={{color: '#fff'}}
            onPress={() => setShow(true)}>
            <Text style={{color: '#fff'}}>
              {date ? date.toString() : 'Date Of Birth'}
            </Text>
          </TouchableOpacity>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.descTxt}>
              SNBC can send commercial proposals about its products and
              activities
            </Text>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text style={styles.descTxt}>
              I agree with the{' '}
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Tap to open transport terms and conditions">
                <Text style={styles.descTxt}>
                  transport terms and conditions
                </Text>
              </TouchableOpacity>{' '}
              and the
              <TouchableOpacity
                accessible={true}
                accessibilityLabel="Tap to open confidentiality policy">
                <Text style={styles.descTxt}>confidentiality policy</Text>
              </TouchableOpacity>{' '}
              of SNCB
            </Text>
          </View>
          <View>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Tap to open Privacy Policy">
              <Text style={styles.descTxt}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.descTxt} accessible={true}>
          We process your personel data in accordance with our
          <TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap to open Privacy Policy">
            <Text>Privacy Policy</Text>
          </TouchableOpacity>
        </Text>
        <TouchableOpacity
          style={styles.createBtn}
          title="Go to Details"
          onPress={null}>
          <Text style={styles.btnTxt}>Create an account</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View
              style={styles.modalView}
              accessible={true}
              accessibilityLiveRegion="assertive">{/* Force the screen reader to modal */}
              <Picker
                accessibilityLabel="Select a language"
                style={styles.picker}
                accessible={true}
                mode="dropdown"
                itemStyle={styles.itemStyle}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="English" value="English" />
                <Picker.Item label="Dutch" value="Doutch" />
                <Picker.Item label="German" value="German" />
              </Picker>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}
