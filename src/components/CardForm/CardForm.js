import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import styles from "./CardForm.style";
import { useDispatch, useSelector } from "react-redux";
import { setDate, setName, setNumber } from "../../redux/slices/PaymentSlice";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const CardForm = () => {
  const [txtNumber, setTxtNumber] = useState("");
  const [txtName, setTxtName] = useState("");
  const [txtDate, setTxtDate] = useState("");
  const [month, setMonth] = useState("01");
  const [year, setYear] = useState("22");
  const dispatch = useDispatch();

  /* const name = useSelector((state) => state.payment.name);
  const number = useSelector((state) => state.payment.number);
  const date = useSelector((state) => state.payment.date);
   */
  const months = [];
  const years = [];
  const currentYear = new Date().getFullYear();
  let index = 0;

  for (let i = 0; i < 12; i++) {
    if (i < 9) {
      months[i] = String(i + 1).padStart(2, "0");
    } else {
      months[i] = (i + 1).toString();
    }
  }
  for (let i = currentYear; i <= currentYear + 20; i++) {
    years[index] = i.toString();
    index++;
  }

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const handleNumberInput = (text) => {
    setTxtNumber(text);
    text === ""
      ? dispatch(setNumber("****************"))
      : dispatch(setNumber(text));
  };
  const handleNameInput = (text) => {
    setTxtName(text);
    text === "" ? dispatch(setName("****")) : dispatch(setName(text));
  };
  const handleDateInput = (text) => {
    /*     const month = text.substring(0, 2);
    const year = text.substring(2, 4); */

    setTxtDate(text);
    text === "" ? dispatch(setDate("****")) : dispatch(setDate(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs_container}>
        <View style={styles.firstLine}>
          <Text style={styles.cardNumber}>Card Number</Text>
          <View style={styles.cardNumber_inputBox}>
            <TextInput
              maxLength={16}
              keyboardType="number-pad"
              style={styles.input}
              onChangeText={(text) => handleNumberInput(text)}
              value={txtNumber}
            />
          </View>
        </View>
        <View style={styles.secondLine}>
          <View style={styles.secondLeft}>
            <Text style={styles.cardHolder}>Cardholder Name</Text>
            <View style={styles.cardHolder_inputBox}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => handleNameInput(text)}
                value={txtName.toUpperCase()}
              />
            </View>
          </View>
          <View style={styles.secondRight}>
            <Text style={styles.validThru_text}>Valid Thru</Text>
            <View style={styles.validThru_inputBox}>
              <TextInput
                maxLength={2}
                keyboardType="number-pad"
                style={styles.input}
                onChangeText={(text) => handleDateInput(text)}
                value={txtDate}
              />
              <Text style={{ fontSize: 22, alignSelf: "center" }}>/</Text>
              <TextInput
                maxLength={2}
                keyboardType="number-pad"
                style={styles.input}
                onChangeText={(text) => handleDateInput(text)}
                value={txtDate}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardForm;
