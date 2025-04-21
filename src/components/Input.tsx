import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons"; // or any other icon library

interface InputProps {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  rightIcon?: {
    name: keyof typeof MaterialIcons.glyphMap; // or appropriate type for your icon library
    color?: string;
    size?: number;
    onPress?: () => void;
  };
}

const Input = ({
  label,
  placeholder,
  secureTextEntry = false,
  rightIcon,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[styles.inputContainer, isFocused && styles.focusedContainer]}
      >
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {rightIcon && (
          <TouchableOpacity
            onPress={rightIcon.onPress}
            style={styles.iconContainer}
            disabled={!rightIcon.onPress}
          >
            <MaterialIcons
              name={rightIcon.name}
              size={rightIcon.size || 24}
              color={rightIcon.color || "#808080"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  label: {
    color: "#808080",
    fontSize: 14,
    marginBottom: 8,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  focusedContainer: {
    borderColor: "blue",
  },
  input: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  iconContainer: {
    marginLeft: 8,
    padding: 4,
  },
});

export default Input;
