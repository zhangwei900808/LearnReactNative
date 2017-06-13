import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
//我的组件
import Bananas from './src/components/android/Bananas'
import LotsOfGreetings from './src/components/android/LotsOfGreetings'
import BlinkApp from './src/components/android/BlinkApp'
import LotsOfStyles from './src/components/android/LotsOfStyles'
import FixedDimensionsBasics from './src/components/android/FixedDimensionsBasics'
import FlexDimensionsBasics from './src/components/android/FlexDimensionsBasics'
import FlexDirectionBasics from './src/components/android/FlexDirectionBasics'
import JustifyContentBasics from './src/components/android/JustifyContentBasics'
import AlignItemsBasics from './src/components/android/AlignItemsBasics'
import PizzaTranslator from './src/components/android/PizzaTranslator'
import IScrolledDownAndWhatHappenedNextShockedMe from './src/components/android/IScrolledDownAndWhatHappenedNextShockedMe'
import FlatListBasics from './src/components/android/FlatListBasics'
import SectionListBasics from './src/components/android/SectionListBasics'


export default class LearnReactNative extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Bananas />
        <LotsOfGreetings/>
        <BlinkApp/>
        <LotsOfStyles/>
        {/*<FixedDimensionsBasics/>*/}
        <FlexDimensionsBasics/>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('LearnReactNative', () => SectionListBasics);
