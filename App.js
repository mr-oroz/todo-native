import React from 'react';
import { View, StyleSheet } from 'react-native';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Main from './screens/main';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.App}>
        <Main/>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  App: {
    flex: 1,
  },
})

export default App;
