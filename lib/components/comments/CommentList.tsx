import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from "react-native";

import {
    useGetCommentsQuery
} from '../../../src/graphql/generated'
import {Avatar, ListItem} from "react-native-elements";
import {useSubscription} from "@apollo/client";
import gql from "graphql-tag";
const MESSAGE_SUBSCRIPTION = gql`
    subscription onMessageAdded {
        messageAdded
    }
`;
// @ts-ignore
const CommentList = () => {
    const comments = useGetCommentsQuery();
    const { loading, error, data } = useSubscription(MESSAGE_SUBSCRIPTION);
    // comment 생성 이 들어오면 comments 에 추가

    const commentsRender = () => {
        return (
            comments?.data?.comments?.map((comment, index) => (
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
