import {gql} from "@apollo/client";

export const INSERT_RATINGS_ONE = gql`mutation($email: String!, $reviewer_first_name: String!, $reviewer_last_name: String!, $category: Int!, $comment: String!, $rating: numeric!) {
    insert_ratings_one(object: {email: $email, reviewer_first_name: $reviewer_first_name, reviewer_last_name: $reviewer_last_name, category: $category, comment: $comment, rating: $rating}) {
        id
    }
}`;

export const GET_RATINGS = gql`query getRatings {
    ratings {
        id
        reviewer_first_name
        reviewer_last_name
        category
        comment
        rating
        created_at
    }
}`;