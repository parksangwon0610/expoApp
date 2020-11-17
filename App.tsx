import {ApolloProvider} from '@apollo/client';

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import apolloClient from './client'
import {Button} from 'react-native-elements';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ArticlesScreen from './lib/components/articles/Articles';
import ArticleDetailScreen from './lib/components/articles/Detail';
import CommentsScreen from './lib/components/Comments'
import ServerMessage from './lib/components/ServerMessage'

const Stack = createStackNavigator();

// @ts-ignore
function HomeScreen({navigation}) {
    return (
        <View style={styles.menuContainer}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Articles')}>
                    <Text style={styles.elementContainer}>Articles</Text>
                </TouchableOpacity>
            </View>
            <View>
                {/*<TouchableOpacity onPress={() => navigation.navigate('Articles')}>*/}
                <Text style={styles.elementContainer}>Comments</Text>
                {/*</TouchableOpacity>*/}
                <ServerMessage/>
            </View>
            {/*<View>*/}
            {/*    <Button*/}
            {/*        icon={{*/}
            {/*            name: "arrow-right",*/}
            {/*            size: 15,*/}
            {/*            color: "white"*/}
            {/*        }}*/}
            {/*        title="Articles"*/}
            {/*        onPress={() => navigation.navigate('Articles')}*/}
            {/*    />*/}
            {/*</View>*/}
        </View>
    );
}

export default function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    {/*스택의 초기경로는 Home 이다*/}
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{title: 'KoSAC'}} // 각 화면 타이틀(헤더에 렌더링됨)
                    />
                    <Stack.Screen
                        name="Articles"
                        component={ArticlesScreen}
                    />
                    <Stack.Screen
                        name="ArticleDetail"
                        component={ArticleDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ApolloProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        paddingTop: '5%',
        paddingLeft: '5%',
    },
    elementContainer: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 50
    }

});
