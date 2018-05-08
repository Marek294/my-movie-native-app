import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Browse from './src/containers/Browse/Browse';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Navigation = createBottomTabNavigator({
  Browse: { 
    screen: Browse,
    navigationOptions: {
      title: 'Przeglądaj'
    }  
  }
},
{
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'rgba(255,255,255,0.5)',
    style: {
      backgroundColor: '#2e2e2e',
      borderColor: '#2e2e2e',
      borderBottomColor: '#c20114',
      borderWidth: 1
    },
    indicatorStyle: {
      backgroundColor: '#c20114'
    }
  },
});

class App extends Component {
  render() {
    return (
        <Navigation />
    );
  }
}

export default App;
