import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import styles from "./CardForm.style";
import { useDispatch, useSelector } from "react-redux";
import {
  setMonth,
  setName,
  setNumber,
  setYear,
} from "../../redux/slices/PaymentSlice";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const CardForm = () => {
  const [txtNumber, setTxtNumber] = useState("");
  const [txtName, setTxtName] = useState("");
  const [txtMonth, setTxtMonth] = useState("");
  const [txtYear, setTxtYear] = useState("");

  const dispatch = useDispatch();

  const input_1 = useRef(null);
  const input_2 = useRef(null);
  const input_3 = useRef(null);
  const input_4 = useRef(null);

  const handleNumberInput = (text) => {
    setTxtNumber(text);

    text === ""
      ? dispatch(setNumber("****************"))
      : dispatch(setNumber(text));

    if (input_1 !== null && text.length === 16) {
      input_2.current.focus();
    }
  };
  const handleNameInput = (text) => {
    setTxtName(text);
    text === "" ? dispatch(setName("****")) : dispatch(setName(text));
  };
  const handleMonthInput = (text) => {
    setTxtMonth(text);
    text === "" ? dispatch(setMonth("**")) : dispatch(setMonth(text));
    if (input_3 !== null && text.length === 2) {
      input_4.current.focus();
    }
  };
  const handleYearInput = (text) => {
    setTxtYear(text);
    text === "" ? dispatch(setYear("**")) : dispatch(setYear(text));
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs_container}>
        <View style={styles.firstLine}>
          <Text style={styles.cardNumber}>Card Number</Text>
          <View style={styles.cardNumber_inputBox}>
            <TextInput
              maxLength={16}
              ref={input_1}
              keyboardType="number-pad"
              style={styles.input}
              onChangeText={(text) => handleNumberInput(text)}
              value={txtNumber}
              onSubmitEditing={() => input_2.current.focus()}
              placeholder={"Enter your card number"}
            />
          </View>
        </View>
        <View style={styles.secondLine}>
          <View style={styles.secondLeft}>
            <Text style={styles.cardHolder}>Cardholder Name</Text>
            <View style={styles.cardHolder_inputBox}>
              <TextInput
                ref={input_2}
                style={styles.input}
                onChangeText={(text) => handleNameInput(text)}
                value={txtName}
                onSubmitEditing={() => input_3.current.focus()}
                placeholder={"Your name and surname"}
              />
            </View>
          </View>
          <View style={styles.secondRight}>
            <Text style={styles.validThru_text}>Valid Thru</Text>
            <View style={styles.validThru_inputBox}>
              <TextInput
                ref={input_3}
                maxLength={2}
                keyboardType="number-pad"
                style={[styles.input, styles.input_validThru]}
                onChangeText={(text) => handleMonthInput(text)}
                value={txtMonth}
                onSubmitEditing={() => input_4.current.focus()}
                placeholder={'MM'}
              />
              <Text
                style={{ fontSize: 18, alignSelf: "center", color: "#8C8C8C" }}
              >
                /
              </Text>
              <TextInput
                ref={input_4}
                maxLength={2}
                keyboardType="number-pad"
                style={[styles.input, styles.input_validThru]}
                onChangeText={(text) => handleYearInput(text)}
                value={txtYear}
                placeholder={'YY'}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardForm;
