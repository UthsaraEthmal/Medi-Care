import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Modal, KeyboardAvoidingView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function DateReminderFE() {
  const [morningDate, setMorningDate] = useState(null);
  const [morningTime, setMorningTime] = useState(null);
  const [numberOfDates, setNumberOfDates] = useState('');

  const [showMorningDatePicker, setShowMorningDatePicker] = useState(false);
  const [showMorningTimePicker, setShowMorningTimePicker] = useState(false);

  const handleMorningDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || morningDate;
    setShowMorningDatePicker(false);
    setMorningDate(currentDate);
  };

  const handleMorningTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || morningTime;
    setShowMorningTimePicker(false);
    setMorningTime(currentTime);
  };

  const formatTime = (time) => {
    return `${time.getHours()}:${time.getMinutes() < 10 ? '0' : ''}${time.getMinutes()}`;
  };

  const setReminder = () => {
    if (!morningDate || !morningTime || !numberOfDates) {
      setErrorModalVisible(true);
      return;
    }
    // Calculate the time until license expiry
    const morningDateTime = new Date(morningDate.getFullYear(), morningDate.getMonth(), morningDate.getDate(), morningTime.getHours(), morningTime.getMinutes());
    const licenseTimeRemaining = morningDateTime.getTime() - Date.now();
    // Show the license expiry modal
    if (licenseTimeRemaining <= 0) {
      setLicenseModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subView}>
        <Text style={styles.heading}>Once for a day</Text>
        <View style={styles.container3}>
          <Text style={styles.nrrText}>
            Please set <Text style={styles.specialBlue}>time and date</Text>
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder=' Date'
            onFocus={() => setShowMorningDatePicker(true)}
            value={morningDate ? morningDate.toLocaleDateString() : ''}
          />
          {showMorningDatePicker && (
            <DateTimePicker
              mode='date'
              display='spinner'
              value={morningDate || new Date()}
              onChange={handleMorningDateChange}
              minimumDate={new Date()} // Disable selecting past dates
            />
          )}
          <TextInput
            style={styles.inputBox}
            placeholder=' Time'
            onFocus={() => setShowMorningTimePicker(true)}
            value={morningTime ? formatTime(morningTime) : ''}
          />
          {showMorningTimePicker && (
            <DateTimePicker
              mode='time'
              display='spinner'
              value={morningTime || new Date()}
              onChange={handleMorningTimeChange}
            />
          )}
        </View>

        <View style={styles.container4}>
        <Text style={styles.nrrText}>
            Please set <Text style={styles.specialBlue}>number of dates</Text>
          </Text>
          <TextInput
            style={styles.inputBox}
            placeholder=' Enter number of dates'
            keyboardType='numeric'
            value={numberOfDates}
            onChangeText={setNumberOfDates}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={setReminder}>
          <Text style={styles.buttonText}>Set Reminder</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <View style={styles.btn}>
          <Icon name="home" size={30} color="white" />
        </View>
      </TouchableOpacity>  
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    width:"85%",
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: '#3AB0FF',
    borderWidth: 1,
    marginBottom: 10,
  },
  container4: {
    width:"85%",
    flex: 1,
    backgroundColor: '#F0FFFF',
    borderColor: '#3AB0FF',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 20,
    marginBottom: 10,
  },
  subView: {
    height: '85%',
    width: '90%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop:30,
    borderColor: '#3AB0FF',
    borderWidth: 5,
  },
  heading: {
    paddingTop: 50,
    color: '#3AB0FF',
    fontWeight: 'bold',
    fontSize: 26,
    paddingBottom: 10,
    marginBottom: 20,
  },
  inputBox: {
    width: 250,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 16,
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    fontWeight: 'bold',
    marginVertical: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
  },
  button: {
    width: 250,
    backgroundColor: '#3AB0FF',
    borderRadius: 100,
    marginVertical: 16,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  specialBlue: {
    color: '#3AB0FF',
  },
  nrrText: {
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
 
  btn: {
    backgroundColor: '#2CB3FF',
    marginTop: 10,
    marginBottom:10,
    borderRadius: 30,
    color: 'white',
    width: 60,
    height:60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white'
  }, 

centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},

textStyle: {
  color: "white",
  fontWeight: "bold",
  textAlign: "center"
},




});

