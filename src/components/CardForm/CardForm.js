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

const CardForm = ({ setIsFront }) => {
  const [txtNumber, setTxtNumber] = useState("");
  const [txtName, setTxtName] = useState("");
  const [txtMonth, setTxtMonth] = useState("");
  const [txtYear, setTxtYear] = useState("");
  const [txtCvv, setTxtCvv] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const dispatch = useDispatch();

  const input_cardNum = useRef(null);
  const input_cardholderName = useRef(null);
  const input_month = useRef(null);
  const input_year = useRef(null);
  const input_cvv = useRef(null);

  const handleNumberInput = (text) => {
    setTxtNumber(text);

    text === ""
      ? dispatch(setNumber("****************"))
      : dispatch(setNumber(text));

    if (input_cardNum !== null && text.length === 16) {
      input_cardholderName.current.focus();
    }
  };
  const handleNameInput = (text) => {
    setTxtName(text);
    text === "" ? dispatch(setName("****")) : dispatch(setName(text));
  };
  const handleMonthInput = (text) => {
    setTxtMonth(text);
    text === "" ? dispatch(setMonth("**")) : dispatch(setMonth(text));
    if (input_month !== null && text.length === 2) {
      input_year.current.focus();
    }
  };
  const handleYearInput = (text) => {
    setTxtYear(text);
    text === "" ? dispatch(setYear("**")) : dispatch(setYear(text));
  };
  const handleCvvInput = (text) => {
    setTxtCvv(text);
    // dispatch
  };
  const handleFocus = (bool) => {
    setIsFront(bool);
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.firstLine}>
        <Text style={styles.input_header}>Card Number</Text>
        <View style={styles.input_box}>
          <TextInput
            maxLength={16}
            ref={input_cardNum}
            keyboardType="number-pad"
            style={styles.input}
            onChangeText={(text) => handleNumberInput(text)}
            value={txtNumber}
            onSubmitEditing={() => input_cardholderName.current.focus()}
            placeholder={"Enter your card number"}
            onFocus={() => handleFocus(true)}
          />
        </View>
      </View>

      <View style={styles.secondLine}>
        <Text style={styles.input_header}>Cardholder Name</Text>
        <View style={styles.input_box}>
          <TextInput
            ref={input_cardholderName}
            style={styles.input}
            onChangeText={(text) => handleNameInput(text)}
            value={txtName}
            onSubmitEditing={() => input_month.current.focus()}
            placeholder={"Your name and surname"}
            onFocus={() => handleFocus(true)}
          />
        </View>
      </View>

      <View style={styles.thirdLine}>
        <View style={styles.thirdLeft}>
          <Text style={styles.input_header}>Valid Thru</Text>
          <View style={styles.validThru_inputBox}>
            <TextInput
              ref={input_month}
              maxLength={2}
              keyboardType="number-pad"
              style={styles.input}
              onChangeText={(text) => handleMonthInput(text)}
              value={txtMonth}
              onSubmitEditing={() => input_year.current.focus()}
              placeholder={"MM"}
              onFocus={() => handleFocus(true)}
            />
            <Text
              style={{
                fontSize: 18,
                alignSelf: "center",
                color: "#8C8C8C",
                marginHorizontal: 0,
              }}
            >
              /
            </Text>
            <TextInput
              ref={input_year}
              maxLength={2}
              keyboardType="number-pad"
              style={styles.input}
              onChangeText={(text) => handleYearInput(text)}
              value={txtYear}
              placeholder={"YY"}
              onFocus={() => handleFocus(true)}
            />
          </View>
        </View>
        <View style={styles.thirdRight}>
          <Text style={styles.input_header}>Security Code</Text>
          <View style={styles.input_box}>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              ref={input_cvv}
              maxLength={3}
              value={txtCvv}
              onChangeText={(text) => handleCvvInput(text)}
              placeholder={"CVV"}
              onFocus={() => handleFocus(false)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardForm;
