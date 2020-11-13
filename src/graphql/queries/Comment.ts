import gql from 'graphql-tag';

export const GET_COMMENTS = gql`
    query getComments {
        comments {
            id
            content
        }
    }
`;

export const CREATE_COMMENT = gql`
    mutation addMyComment (
        $content: String
        $id: String
    ) {
        addMyComment(
            content: $content
            article: {
                id: $id
            }
        ) {
            content
            article {
                title
            }
        }
    }
`
