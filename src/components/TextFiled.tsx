import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextStyle,
  ViewStyle,
  TextInputProps,
  TouchableOpacity,
  StyleProp,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // or your preferred icon library

interface TextFieldProps extends TextInputProps {
  label?: string;
  leftIconName?: string;
  rightIconName?: string;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  iconSize?: number;
  iconColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  labelStyle?: StyleProp<TextStyle>;
  leftIconStyle?: StyleProp<ViewStyle>;
  rightIconStyle?: StyleProp<ViewStyle>;
  borderColor?: string;
  borderRadius?: number;
  focusBorderColor?: string;
  error?: boolean;
  errorColor?: string;
  errorText?: string;
  errorStyle?: StyleProp<TextStyle>;
}

const TextField = React.forwardRef<TextInput, TextFieldProps>((props, ref) => {
  const {
    label,
    leftIconName,
    rightIconName,
    onLeftIconPress,
    onRightIconPress,
    iconSize = 20,
    iconColor = "#666",
    containerStyle,
    inputStyle,
    labelStyle,
    leftIconStyle,
    rightIconStyle,
    borderColor = "#1a237e",
    borderRadius = 8,
    focusBorderColor = "#303f9f",
    error = false,
    errorColor = "#f44336",
    errorText,
    errorStyle,
    style,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = React.useState(false);

  const renderIcon = (
    iconName?: string,
    onPress?: () => void,
    iconStyle?: StyleProp<ViewStyle>
  ) => {
    if (!iconName) return null;

    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={!onPress}
        style={[styles.iconContainer, iconStyle]}
      >
        <MaterialIcons
          name={iconName as any}
          size={iconSize}
          color={error ? errorColor : iconColor}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}

      <View
        style={[
          styles.inputWrapper,
          {
            borderColor: error
              ? errorColor
              : isFocused
              ? focusBorderColor
              : borderColor,
            borderRadius,
          },
        ]}
      >
        {renderIcon(leftIconName, onLeftIconPress, [
          styles.leftIcon,
          leftIconStyle,
        ])}

        <TextInput
          ref={ref}
          style={[
            styles.input,
            {
              paddingLeft: leftIconName ? 40 : 16,
              paddingRight: rightIconName ? 40 : 16,
            },
            inputStyle,
            style,
          ]}
          placeholderTextColor="#999"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...rest}
        />

        {renderIcon(rightIconName, onRightIconPress, [
          styles.rightIcon,
          rightIconStyle,
        ])}
      </View>

      {error && errorText && (
        <Text style={[styles.errorText, { color: errorColor }, errorStyle]}>
          {errorText}
        </Text>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: "100%",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    color: "#333",
  },
  iconContainer: {
    position: "absolute",
    padding: 12,
    zIndex: 1,
  },
  leftIcon: {
    left: 0,
  },
  rightIcon: {
    right: 0,
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});

export default TextField;
