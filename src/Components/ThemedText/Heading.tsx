import { useMemo } from 'react'
import ThemedText, { type ThemedTextProps } from './ThemedText'
import Text, { type TextProps } from './Text'

type HeadingProps = {
	/**
	 * Controls the weight and fontsize for a heading, which all use the main Heading font family.
	 * - h1: used for Main stack screens as the top most header
	 * - h2: main section headers
	 * - h3: minor section headers (same size as h2 but not bold) 
	 */
	headingSize: "h1" | "h2" | "h3",
	color?: string;
} & TextProps
const Heading = ({ headingSize, italic, children, ...rest }: HeadingProps) => {
	// const { currentFontFamilies } = useInternalTheme();
	// const headingStyles = useMemo(() => {
	// 	switch (headingSize) {
	// 		case "h1":
	// 			return {
	// 				weight: 'bold',
	// 				sizing: TypopgraphySize.textLarge,
	// 				fontFamily: currentFontFamilies.find(x => x.type == "heading")?.bold
	// 			}
	// 		case "h2":
	// 			return {
	// 				weight: 'bold',
	// 				sizing: TypopgraphySize.textMedium,
	// 				fontFamily: currentFontFamilies.find(x => x.type == "heading")?.bold
	// 			}
	// 		case "h3":
	// 			return {
	// 				weight: 'semibold',
	// 				sizing: TypopgraphySize.textMedium,
	// 				fontFamily: currentFontFamilies.find(x => x.type == "heading")?.medium
	// 			}
	// 		default:
	// 			return {
	// 				weight: 'bold',
	// 				sizing: TypopgraphySize.textLarge,
	// 				fontFamily: currentFontFamilies.find(x => x.type == "heading")
	// 			}
	// 	}
	// }, [headingSize])


	const sizing = useMemo(() => {
		switch (headingSize) {
			case "h1":
				return {
					weight: 'bold',
					sizing: "lg",
				}
			case "h2":
				return {
					weight: 'bold',
					sizing: "md",
				}
			case "h3":
				return {
					weight: 'semibold',
					sizing: "md",
				}
			default:
				return {
					weight: 'bold',
					sizing: "lg",
				}
		}

	}, [headingSize])
	return (
		<Text {...rest} weight={sizing.weight as ThemedTextProps["weight"]} italic={italic} size={sizing.sizing as ThemedTextProps["size"]} family={'heading'}>{children}</Text>
	)
}

export default Heading

