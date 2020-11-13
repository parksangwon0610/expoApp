import React from 'react';
import gql from 'graphql-tag';
import { useSubscription } from '@apollo/client';
import { Text } from 'react-native';
const MESSAGE_SUBSCRIPTION = gql`
    subscription onMessageAdded {
        messageAdded
    }
`;

export function ServerMessage() {
    const { loading, error, data } = useSubscription(MESSAGE_SUBSCRIPTION);
    return  <div>
        { (loading) ? ( <Text>📪</Text> ):
            <Text>📫 {data?.messageAdded}</Text>
        }
    </div>;
};

export default ServerMessage;
