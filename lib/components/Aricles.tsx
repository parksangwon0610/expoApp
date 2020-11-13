import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View} from "react-native";
import { Header, Button, Card } from 'react-native-elements';

import {
    useGetArticlesQuery,
    useCreateArticleMutation,
} from '../../src/graphql/generated'
import {render} from "react-dom";


const ArticlesScreen = () => {
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
    return (

        <View>
            <Header

                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Card>
                <Card.Title>Articles</Card.Title>
                <Card.Divider/>
                {
                    data?.articles?.map((article, index) => (
                        <Text key={index} >
                            {article?.title}
                        </Text>
                    ))
                }
            </Card>
            <TextInput
                style={styles.textInput}
                onChangeText={setTitle}
                value={title}
            />
            <Button
                type="clear"
                title='create activity'
                onPress={() => runCreateArticle()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
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
    }
})

export default ArticlesScreen;


