import {gql} from "@apollo/client";

// export const INSERT_RATING = gql`mutation {
//     insert_ratings(objects: {category: 2, comment: "idk", rating: 2, reviewer: "me"}) {
//         returning {
//           id
//         }
//     }
// }`;

export const GET_RATINGS = gql`query getRatings {
    ratings {
        id
        reviewer
        category
        comment
        rating
        created_at
    }
}`;