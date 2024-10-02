import { StyleSheet, Text, View } from 'react-native';
import ThemedText, { type ThemedTextProps } from './ThemedText';
import { padding } from '../../theming';
import type { TextProps } from './Text';

type ParagraphProps = {} & TextProps;

const Paragraph = ({
  weight,
  color,
  italic,
  size,
  family,
  children,
  ...rest
}: ParagraphProps) => {
  return (
    <View style={{ marginTop: padding }}>
      <ThemedText
        weight={weight ?? 'regular'}
        italic={italic ?? false}
        family={family ?? 'primary'}
        size={size ?? 'default'}
        color={color}
        {...rest}
      >
        {children}
      </ThemedText>
    </View>
  );
};

export default Paragraph;
