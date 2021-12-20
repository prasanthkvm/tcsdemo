import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  descTxt: {
    color: '#ccc',
  },
  infoTxt: {
    color: '#87ceeb',
  },
  cTxt: {
    height: 40,
    //marginBottom: 25,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    color: '#ccc',
    paddingVertical: 10,
  },
  selectBtn: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  inputStyle: {
    height: 40,
    marginBottom: 25,
    borderColor: '#ccc',
    borderBottomWidth: 1,
    color: '#ccc',
  },
  formWrap: {
    marginTop: 20,
  },
  iconWrap: {
    position: 'absolute',
    right: 20,
    bottom: 35,
  },
  scrollView: {
    paddingTop: 30,
    paddingBottom: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  itemStyle: {
    fontSize: 15,
    height: 75,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  picker: {
    width: 300,
    height: 100,
  },
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    paddingRight: 20,
    paddingLeft: 5,
  },
  checkbox: {
    width: 40,
  },
  createBtn: {
    borderWidth: 1,
    borderColor: '#87ceeb',
    padding: 15,
    marginHorizontal: 10,
  },
  btnTxt: {
    color: '#87ceeb',
    textAlign: 'center',
  },
});
