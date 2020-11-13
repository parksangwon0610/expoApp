import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
// import {pubsub} from '../utils/redis';

import {
    useGetArticlesQuery,
    useCreateArticleMutation,
    useGetCommentsQuery, useAddMyCommentMutation
} from '../../src/graphql/generated'
import {render} from "react-dom";


const CommentsScreen = () => {
    const comments = useGetCommentsQuery();
    const [subComment, setSubComment] = useState('');
    const [addMyComment] = useAddMyCommentMutation();

    const [content, setContent] = useState('comment content');
    const [articleId, setArticleId] = useState('');

    // const subscription = async () => {
    //     const data = await pubsub.pubsub.asyncIterator('messageAdded');
    //     setSubComment(data.messageAdded);
    // }

    const runAddMyComment = () => {
        setArticleId('5fa1925166fc8a126a825f2c');
        addMyComment({
            variables: {
                content: content,
                id: '5fa1925166fc8a126a825f2c'
            },
            context: {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTIwMTdkNDhmZTVhMTc4MGVjNzJjMCIsImlhdCI6MTYwNDQ1NTQyMiwiZXhwIjoxNjA3MDQ3NDIyfQ.uv7zCwQN1B_OYkHPJEjH4MWAyLymxFWB63fJ_Z5rU5c"
                }
            }
        })
    };
    return (
        <View style ={styles.mainContainer}>
            {
                comments?.data?.comments?.map(comment => (
                    <Text>
                        {comment?.content}
                    </Text>
                ))
            }
            <TextInput
                style={styles.textInput}
                onChangeText={setContent}
                value={content}
            />
            <Button
                title='create comment'
                onPress={() => runAddMyComment()}
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
        width: 500
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

export default CommentsScreen;


