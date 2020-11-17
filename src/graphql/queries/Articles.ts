import gql from 'graphql-tag';

export const GET_ARTICLES = gql`
    query getArticles {
        articles {
            id
            title
            content
        }
    }
`;

// export const GET_ARTICLE_COMMENTS = gql`
//     query getArticleComments ($id: String) {
//         commentsInArticles(
//             id: $id
//         ) {
//             content
//         }
//     }
// `
export const GET_ARTICLE_COMMENTS = gql`
    query getArticleComments (
        $articleId: ID!
    ){
        comments(
            where:{
                article:{
                    id:$articleId
                }
            }
        ) {
            content
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
