import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Header from './src/components/Header/Header';
import MostPopularMovies from './src/containers/Tops/MostPopularMovies/MostPopularMovies';
import TopRatedMovies from './src/containers/Tops/TopRatedMovies/TopRatedMovies';
import MostPopularTV from './src/containers/Tops/MostPopularTV/MostPopularTV';
import TopRatedTV from './src/containers/Tops/TopRatedTV/TopRatedTV';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const BrowseNavigation = createBottomTabNavigator({
  MostPopularMovies: { screen: MostPopularMovies },
  TopRatedMovies: { screen: TopRatedMovies },
  MostPopularTV: { screen: MostPopularTV },
  TopRatedTV: { screen: TopRatedTV }
});

const Navigation = createStackNavigator({
  Browse: { 
    screen: BrowseNavigation,
    navigationOptions: {
      headerTitle: <Header title="Browse" />
    }
   }
});

class App extends Component {
  render() {
    return (
        <Navigation />
    );
  }
}

export default App;
