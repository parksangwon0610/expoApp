import gql from 'graphql-tag';

export const GET_ARTICLES = gql`
    query getArticles {
        articles {
            id
            title
        }
    }
`;

export const CREATE_ARTICLE = gql`
    mutation createArticle ($input: createArticleInput) {
        createArticle(input: $input) {
            article {
                id
            }
        }
    }
`
