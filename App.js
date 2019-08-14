/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import { SafeAreaView, View } from 'react-native';
import AddEntry from './components/AddEntry'

const App = () => {
  return (
    <Fragment>
      <SafeAreaView>
        <AddEntry />
      </SafeAreaView>
    </Fragment>
  );
};


export default App;
