import { useWindowDimensions } from 'react-native';


export function useCustomMediaQuery() {
	const { width } = useWindowDimensions();
	const isSmallDevice = width < 768;
	const isMediumDevice = width > 769 && width < 992;
	const isLargeDevice = width > 993 && width < 1200;
	const isExtraLargeDevice = width > 1201;

	return { isSmallDevice, isMediumDevice, isLargeDevice, isExtraLargeDevice }
}
