import { View, Text, TouchableOpacity, Animated } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./HiddenItemWithActions.style";

const HiddenItemWithActions = (props) => {
  const { onClose, onDelete, swipeAnimatedValue } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.leftCorner}></Text>
      <View style={styles.rightCorner}>
        <TouchableOpacity style={styles.buttonRight_Left} onPress={onClose}>
          <Animated.View
            style={[
              {
                transform: [
                  {
                    scale: swipeAnimatedValue.interpolate({
                      inputRange: [-90, -45],
                      outputRange: [1, 0],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              },
            ]}
          >
            <Ionicons name="close-circle-outline" size={40} color="white" />
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRight_Right} onPress={onDelete}>
          <Animated.View
            style={[
              {
                transform: [
                  {
                    scale: swipeAnimatedValue.interpolate({
                      inputRange: [-90, -45],
                      outputRange: [1, 0],
                      extrapolate: "clamp",
                    }),
                  },
                ],
              },
            ]}
          >
            <Ionicons name="trash-outline" size={30} color="white" />
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HiddenItemWithActions;
