import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from "react-native";

import {
    GetArticleCommentsQuery,
    useGetCommentsQuery
} from '../../../src/graphql/generated'
import {Avatar, ListItem} from "react-native-elements";
import {useSubscription} from "@apollo/client";
import gql from "graphql-tag";
import ServerMessage from '../../components/ServerMessage'

const MESSAGE_SUBSCRIPTION = gql`
    subscription onMessageAdded {
        messageAdded
    }
`;
// @ts-ignore
interface commentListProps {
    commentList: GetArticleCommentsQuery | undefined
}
const CommentList = (props: commentListProps) => {

    // let comments = props.commentList?.comments; //useGetCommentsQuery();
    const [getCommentList, setCommentList] = useState<any>([])
    let { loading, error, data } = useSubscription(MESSAGE_SUBSCRIPTION);

    useEffect(()=> {
        // setCommentList(comments.data?.comments)
        setCommentList(props.commentList?.comments);
    },[props.commentList?.comments]);

    useEffect(()=>{
        if(data) {
            setCommentList([...getCommentList, {content: data.messageAdded}]);
        }
    },[data]);

    const commentsRender = () => {
        console.log('loading', loading);
        return (
            getCommentList?.map((comment, index) => (
                <ListItem key={index} bottomDivider>
                    <TouchableOpacity>
                        <ListItem.Content>
                            <ListItem.Title>{comment?.content}</ListItem.Title>
                        </ListItem.Content>
                    </TouchableOpacity>
                </ListItem>
            ))
        )
    }

    return (
        <View>
            {commentsRender()}

        </View>
    )
};



export default CommentList
