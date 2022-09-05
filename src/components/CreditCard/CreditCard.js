import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./CreditCard.style";
import { useSelector } from "react-redux";

const CreditCard = () => {
  const name = useSelector((state) => state.payment.name);
  const number = useSelector((state) => state.payment.number);
  const month = useSelector((state) => state.payment.month);
  const year = useSelector((state) => state.payment.year);
  return (
    <View style={styles.container}>
      <View style={styles.firstLine_container}>
        <Image
          style={styles.chipImage}
          source={require("../../assets/images/chip2.png")}
        />
      </View>
      <View style={styles.secondLine_container}>
        <Text style={styles.cardNumberText}>{number.slice(0, 4)}</Text>
        <Text style={styles.cardNumberText}>{number.slice(4, 8)}</Text>
        <Text style={styles.cardNumberText}>{number.slice(8, 12)}</Text>
        <Text style={styles.cardNumberText}>{number.slice(12, 16)}</Text>
      </View>
      <View style={styles.thirdLine_container}>
        <View style={styles.thirdLeft}>
          <Text style={styles.cardHolderName}>Cardholder Name</Text>
          <View style={styles.cardHolder_Box}>
            <Text style={styles.nameText}>{name}</Text>
          </View>
        </View>
        <View style={styles.thirdRight}>
          <Text style={styles.validThru}>Valid Thru</Text>
          <View style={styles.validThru_Box}>
            <Text style={styles.dateText}>
              {month} / {year}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreditCard;
