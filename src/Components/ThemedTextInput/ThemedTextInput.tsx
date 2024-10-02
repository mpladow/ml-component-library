import { forwardRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  type TextInputProps,
  TextInput as NativeTextInput,
  Platform,
} from 'react-native';
import TextInputLabel from './components/TextInputLabel';
import { borderRadius, useTheme } from '../../theming';
import TextInputTextArea from './components/TextInputTextArea';

export type CustomTextInputProps = {
  label?: string;
  isRequired?: boolean;
  editable?: boolean;
  secureText?: boolean;
  leftIcon?: JSX.Element; // pass through an icon name and the icon will be set automatically
  /**
   * Display a clear button on the right of the input field
   */
  clearButton?: boolean;
} & TextInputProps;
const ThemedTextInput = ({
  label,
  isRequired,
  style,
  editable,
  secureText,
  leftIcon,
  ...rest
}: CustomTextInputProps) => {
  const { currentTheme } = useTheme();
  const [focused, setFocused] = useState(false);
  return (
    <View>
      {label && (
        <TextInputLabel isRequired={isRequired}>{label}</TextInputLabel>
      )}
      <View>
        <NativeTextInput
          secureTextEntry={secureText}
          editable={editable}
          {...rest}
          style={[
            style,
            styles.textInput,
            editable && { backgroundColor: currentTheme.text.disabled },
            focused
              ? { borderColor: currentTheme.system.infoBlue }
              : { borderColor: currentTheme.system.genericDarkGray },
            Platform.OS == 'web' && {
              outlineColor: currentTheme.system.infoBlue,
            },
            leftIcon && { paddingLeft: 8 * 4 },
          ]}
          onBlur={(e) => {
            setFocused(false);
            rest.onBlur && rest.onBlur(e);
          }}
          showSoftInputOnFocus
          onFocus={(e) => {
            setFocused(true);
            rest.onFocus && rest.onFocus(e);
          }}
        />
        {leftIcon && (
          <View style={{ position: 'absolute', left: 8, top: 8 }}>
            {leftIcon}
          </View>
        )}
      </View>
    </View>
  );
};

ThemedTextInput.Input = ThemedTextInput;
ThemedTextInput.TextArea = TextInputTextArea;

export default ThemedTextInput;

const styles = StyleSheet.create({
  textInput: {
    padding: 8,
    marginBottom: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: borderRadius / 2,
  },
});
