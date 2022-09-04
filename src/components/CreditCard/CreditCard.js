import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./CreditCard.style";

const CreditCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstLine_container}>
        <Image
          style={styles.chipImage}
          source={require("../../assets/images/chip2.png")}
        />
      </View>
      <View style={styles.secondLine_container}>
        <Text style={styles.cardNumberText}>****</Text>
        <Text style={styles.cardNumberText}>****</Text>
        <Text style={styles.cardNumberText}>****</Text>
        <Text style={styles.cardNumberText}>****</Text>
      </View>
      <View style={styles.thirdLine_container}>
        <View style={styles.thirdLeft}>
          <Text style={styles.cardHolderName}>Cardholder Name</Text>
          <View style={styles.cardHolder_Box}>
            <Text style={styles.nameText}>****</Text>
          </View>
        </View>
        <View style={styles.thirdRight}>
          <Text style={styles.validThru}>Valid Thru</Text>
          <View style={styles.validThru_Box}>
            <Text style={styles.dateText}>**/**</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreditCard;
