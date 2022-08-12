import {gql} from "@apollo/client";

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