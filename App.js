/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react'
import { SafeAreaView, View } from 'react-native'
import AddEntry from './components/AddEntry'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const App = () => {
  return (
    <Provider store={createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <Fragment>
        <SafeAreaView>
          <AddEntry />
        </SafeAreaView>
      </Fragment>
    </Provider>
  );
};


export default App;
