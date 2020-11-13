import {ApolloProvider} from '@apollo/client';

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import apolloClient from './client'

import ArticlesScreen from './lib/components/Aricles'
import CommentsScreen from './lib/components/Comments'
import ServerMessage from './lib/components/ServerMessage'


export default function App() {
  return (
      <ApolloProvider client={apolloClient}>
        <View>
          <ArticlesScreen/>
          {/*<CommentsScreen/>*/}
          {/*<ServerMessage/>*/}
        </View>
      </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
