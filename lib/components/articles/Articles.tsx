import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Header, Button, Card, ListItem} from 'react-native-elements';

// components
import DetailScreen from './Detail';

import {
    useGetArticlesQuery,
    useCreateArticleMutation,
} from '../../../src/graphql/generated'
import {render} from "react-dom";


// @ts-ignore
const ArticlesScreen = ({navigation}) => {
    const {data} = useGetArticlesQuery();
    const [mutate] = useCreateArticleMutation();

    const [title, setTitle] = useState('activity title');
    const runCreateArticle = () => {
        mutate({
            variables: {
                input: {
                    data: {
                        title: title
                    }
                }
            }
        })
    };
    // @ts-ignore
    console.log('data >>. ', data);
    return (
        <View style={styles.container}>
            {
                data?.articles?.map((article, index) => (
                    <ListItem key={index} bottomDivider>
                        <TouchableOpacity onPress={() => navigation.navigate('ArticleDetail', {...article})}>
                            <ListItem.Content>
                                <ListItem.Title
                                    style={(article?.title) ? styles.title : styles.noFoundTitle}>{(article?.title) ? article?.title : 'No Title'}</ListItem.Title>
                                <ListItem.Subtitle>{(article?.content) ? article?.content : 'No Content'}</ListItem.Subtitle>
                            </ListItem.Content>
                        </TouchableOpacity>
                    </ListItem>
                ))
            }
            {/*<TextInput*/}
            {/*    style={styles.textInput}*/}
            {/*    onChangeText={setTitle}*/}
            {/*    value={title}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    type="clear"*/}
            {/*    title='create activity'*/}
            {/*    onPress={() => runCreateArticle()}*/}
            {/*/>*/}
            {/*<Button*/}
            {/*    title="Back"*/}
            {/*    onPress={() => navigation.popToTop()}*/}
            {/*/>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    mainContainer: {},
    textInput: {
        borderWidth: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    noFoundTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'gray'
    }
})

export default ArticlesScreen;


