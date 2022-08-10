import {gql} from "@apollo/client";

export const GET_RATINGS = gql`query getRatings {
    ratings {
        id
        reviewer
        comment
        rate
    }
}`;