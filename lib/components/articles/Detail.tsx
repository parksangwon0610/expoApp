import React, {useState, useEffect} from 'react';
import { StyleSheet, TextInput, View} from "react-native";
import {useIsFocused} from '@react-navigation/native';
import {Text, Header, Button, Card, ListItem, Divider} from 'react-native-elements';

import CommentList from '../comments/CommentList'
import {
    useGetArticleCommentsQuery,
    useGetArticleCommentsLazyQuery,
    GetArticleCommentsQuery
} from "../../../src/graphql/generated";
import useFloatingHeaderHeight from "@react-navigation/stack/lib/typescript/src/utils/useHeaderHeight";
// @ts-ignore
const ArticleDetailScreen = ({route, navigation}) => {
    const {
        id,
        title,
        content
    } = route.params;
    const isFocused = useIsFocused();
    const [comments, setComments] = useState<GetArticleCommentsQuery>();
    // const {data, error, loading} = useGetArticleCommentsQuery({
    //     variables: {
    //         articleId: id
    //     }
    // });
    const [getActivityComments, {data, error, loading}] = useGetArticleCommentsLazyQuery({fetchPolicy: 'cache-and-network'});
    useEffect(() => {
       getActivityComments({
           variables: {
               articleId: id
           }
       })
    }, [isFocused]);

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
                <CommentList commentList={data}/>
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


