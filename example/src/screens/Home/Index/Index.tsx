import { StyleSheet, Text, View, Animated as RNAnimated } from 'react-native';
import React, { useEffect, useRef, type PropsWithChildren } from 'react';
import { Wrapper } from '../../../../../src/Components';
import Container from '../../../../../src/Components/Container/Container';
import PageContainer from '../../../../../src/Components/Container/PageContainer';
import ThemedText from '../../../../../src/Components/ThemedText/ThemedText';
import ThemedTextInput from '../../../../../src/Components/ThemedTextInput/ThemedTextInput';
import { padding } from '../../../../../src/theming';
import Button from '../../../../../src/Components/Button/Button';
import AntDesign from '@expo/vector-icons/AntDesign';
import Animated, {
  FadeIn,
  SlideInDown,
  SlideInUp,
  SlideOutDown,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const ButtonContainer = ({ children }: PropsWithChildren) => {
  return <View style={{ marginVertical: padding }}>{children}</View>;
};

const Index = () => {
  const nav = useNavigation();
  const handleButtonPress = () => {};
  const yOffset = useRef(new RNAnimated.Value(0)).current;
  console.log(yOffset, 'yOffset');
  const headerOpacity = yOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  useEffect(() => {
    console.log(yOffset, 'yOffset');

    nav.setOptions({
      headerStyle: {
        opacity: headerOpacity,
      },
      headerBackground: () => (
        <RNAnimated.View
          style={{
            backgroundColor: 'white',
            ...StyleSheet.absoluteFillObject,
            opacity: headerOpacity,
          }}
        />
      ),
      headerTransparent: true,
    });
  }, [headerOpacity, nav]);
  return (
    <PageContainer
      isScrollable={true}
      onScroll={RNAnimated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                y: yOffset,
              },
            },
          },
        ],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    >
      <Wrapper defaultDirection={'column'}>
        <Container containersInRow={3}>
          <ThemedText.Heading headingSize="h1">
            Container One
          </ThemedText.Heading>
          <ThemedText.Paragraph>This is some content</ThemedText.Paragraph>
        </Container>
        <Container containersInRow={3}>
          <ThemedText.Heading headingSize="h1">
            Container One
          </ThemedText.Heading>
          <ThemedText.Paragraph>This is some content</ThemedText.Paragraph>
        </Container>
        <Container containersInRow={3}>
          <ThemedText.Heading headingSize="h1">
            Container One
          </ThemedText.Heading>
          <ThemedText.Paragraph>This is some content</ThemedText.Paragraph>
        </Container>
      </Wrapper>
      <ThemedText.Heading headingSize="h1">Buttons Section</ThemedText.Heading>
      <ThemedText.Paragraph>Default</ThemedText.Paragraph>
      <Animated.View
        exiting={SlideOutDown.duration(400)}
        entering={SlideInDown.duration(500)}
        style={{ marginBottom: padding }}
      >
        <ButtonContainer>
          <Button
            disabled={false}
            variant={'filled'}
            size={'sm'}
            onPress={handleButtonPress}
            type={'primary'}
          >
            Primary
          </Button>
        </ButtonContainer>

        <ButtonContainer>
          <Button
            disabled={false}
            variant={'filled'}
            size={'sm'}
            onPress={handleButtonPress}
            type={'secondary'}
          >
            Secondary
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            disabled={true}
            variant={'filled'}
            size={'sm'}
            onPress={handleButtonPress}
            type={'secondary'}
          >
            Disabled
          </Button>
        </ButtonContainer>
        <ButtonContainer>
          <Button
            disabled={false}
            variant={'filled'}
            size={'sm'}
            onPress={handleButtonPress}
            type="secondary"
          >
            <ThemedText.Text>Button with a jsx element inside</ThemedText.Text>
          </Button>
        </ButtonContainer>

        <Container style={{ marginBottom: padding }} containersInRow={3}>
          <ThemedText.Heading headingSize="h1">Typography</ThemedText.Heading>
          <ThemedText.Heading headingSize="h2">Heading 2</ThemedText.Heading>
          <ThemedText.Heading headingSize="h3">Heading 3</ThemedText.Heading>

          <ThemedText.Text weight="semibold" size="xs">
            Text and Spans XS
          </ThemedText.Text>
          <ThemedText.Text weight="semibold">Text and Spans</ThemedText.Text>
          <ThemedText.Text weight="bold">Text and Spans</ThemedText.Text>
          <ThemedText.Text weight="bold" italic={true}>
            Text and Spans
          </ThemedText.Text>

          <ThemedText.Text>
            This is also a span. There is no spacing between this and the above
            content
          </ThemedText.Text>

          <ThemedText.Paragraph>This is a paragraph</ThemedText.Paragraph>
          <ThemedText.Paragraph>
            This is an additional paragraph underneath. Note the spacing between
            this and the above text.
          </ThemedText.Paragraph>
        </Container>
        <View style={{ marginBottom: padding }}>
          <ThemedText.Heading headingSize="h1">Inputs</ThemedText.Heading>
          <ThemedTextInput
            label="Test"
            leftIcon={<AntDesign name="search1" size={20} color="black" />}
          />
          <ThemedTextInput label="Test" isRequired={true} />
          <ThemedTextInput.TextArea
            label="Test"
            isRequired={true}
            multiline={true}
            lines={4}
          />
        </View>
      </Animated.View>
      <Button
        variant={'filled'}
        type="primary"
        onPress={() => nav.navigate('Animations')}
      >
        navigate to Animations
      </Button>

      <View></View>
    </PageContainer>
  );
};

export default Index;

const styles = StyleSheet.create({});
