import { StyleSheet, Text, View } from 'react-native'
import React, { type PropsWithChildren } from 'react'
import ThemedText from '../../ThemedText/ThemedText'
import { padding, useTheme } from '../../../theming';

type TextInputLabelProps = {
	isRequired?: boolean;
} & PropsWithChildren
const TextInputLabel = ({ isRequired, children }: TextInputLabelProps) => {
	const { currentTheme } = useTheme()
	return (
		<View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: padding }}>
			<ThemedText.Text weight={'bold'}>{children}</ThemedText.Text>
			{isRequired && <ThemedText.Text weight={'semibold'} color={currentTheme.system.infoRed} style={{ textTransform: "capitalize" }}>Required</ThemedText.Text>}
		</View>
	)
}

export default TextInputLabel

