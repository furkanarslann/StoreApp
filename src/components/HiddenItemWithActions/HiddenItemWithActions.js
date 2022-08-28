import { View, Text, TouchableOpacity, Animated } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./HiddenItemWithActions.style";

const HiddenItemWithActions = (props) => {
  const { onClose, onDelete, swipeAnimatedValue } = props;

  return (
    <View style={styles.container}>
      <View style={styles.leftCorner}></View>
      <View style={styles.rightCorner}>
        <TouchableOpacity style={styles.buttonRight_Left} onPress={onClose}>
          <Ionicons name="close-circle-outline" size={30} color="white" />
          <Text style={{ color: "white", fontSize: 13 }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRight_Right} onPress={onDelete}>
          <Animated.View
            style={[
              styles.trash,
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
            <Text style={{ color: "white", fontSize: 13 }}>Delete</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HiddenItemWithActions;
