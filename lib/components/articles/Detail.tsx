import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, View} from "react-native";
import {Text, Header, Button, Card, ListItem, Divider} from 'react-native-elements';

import CommentList from '../comments/CommentList'
import {useGetCommentsQuery, useGetArticleCommentsQuery, useAddMyCommentMutation} from "../../../src/graphql/generated";
// @ts-ignore
const ArticleDetailScreen = ({route, navigation}) => {
    const {
        id,
        title,
        content
    } = route.params;

    return (
        <View style={styles.container}>
            <Text h1>{title}</Text>
            <Divider style={{marginTop: '2%', marginBottom: '5%', backgroundColor: 'gray'}} />
            <Text>{content}</Text>
            <View style={styles.commentTitle}>
                <Text>Comments</Text>
            </View>
            <Divider style={{height:2}}/>
            <View>
                <CommentList/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    divider: {
        backgroundColor: 'gray'
    },
    commentTitle: {
        fontWeight:'bold',
        paddingTop: '5%'
    }
})

export default ArticleDetailScreen;


