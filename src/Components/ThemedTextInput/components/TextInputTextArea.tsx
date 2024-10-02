import { StyleSheet, Text, View } from 'react-native';
import type { CustomTextInputProps } from '../..';
import ThemedTextInput from '../ThemedTextInput';

type TextInputTextArea = {
  lines: number;
  style?: CustomTextInputProps['style'];
} & CustomTextInputProps;

const TextInputTextArea = ({ style, lines, ...rest }: TextInputTextArea) => {
  return (
    <ThemedTextInput
      style={[style, { height: 18 * lines + 12 * 2 }]}
      multiline={true}
      {...rest}
    />
  );
};

export default TextInputTextArea;