import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  Keyboard,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import validator from "validator";
import _ from "lodash";
import moment from "moment";
import { formStyle } from "./Style/FormScreenStyle";

export const FormScreen = () => {
  //USE STATE
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [dateText, setDateText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  //FUCTIONS
  const openDatePicker = () => {
    setShowPicker(true);
  };

  const closeDatePicker = () => {
    setShowPicker(false);
  };

  const handleConfirmDate = (date) => {
    console.log("date picked:", date);
    setDateText(moment(date).format("DD/MMMM/YYYY"));
    closeDatePicker();
  };

  const handleOnSubmit = () => {
    if (_.isEmpty(userName.trim())) {
      alert("Username cannot be empty");
      return;
    }

    if (/[^a-zA-Z]/.test(userName.trim())) {
      alert("Username contains letter only");
      return;
    }

    if (!validator.isEmail(email.trim())) {
      alert("Email is invalid.");
      return;
    }

    if (_.isEmpty(dateText)) {
      alert("Please input date of birth.");
      return;
    }

    Keyboard.dismiss();
    setModalVisible(true);
  };

  return (
    <View style={formStyle.wrapper}>
      <TextInput
        placeholder="Username"
        style={formStyle.textInput}
        value={userName}
        maxLength={50}
        onChangeText={(value) => setUserName(value)}
      />
      <TextInput
        placeholder="Email"
        style={formStyle.textInput}
        keyboardType="email-address"
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={formStyle.dateInput}
        onPress={openDatePicker}
      >
        <Text style={{ color: _.isEmpty(dateText) ? "#C7C7CD" : "black" }}>
          {dateText || "Date of Birth"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={formStyle.submitButton}
        onPress={handleOnSubmit}
      >
        <Text>Submit</Text>
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View
          style={formStyle.modalWrapper}
          onTouchStart={() => setModalVisible(false)}
        >
          <View style={formStyle.modalView}>
            <Text style={formStyle.modalTitle}>Confirmation</Text>
            <Text>Username: {userName}</Text>
            <Text>Email: {email} </Text>
            <Text>Date of Birth: {dateText}</Text>
          </View>
        </View>
      </Modal>
      <DateTimePickerModal
        isVisible={showPicker}
        mode="date"
        onConfirm={handleConfirmDate}
        onCancel={() => setShowPicker(false)}
        maximumDate={new Date()}
      />
    </View>
  );
};
