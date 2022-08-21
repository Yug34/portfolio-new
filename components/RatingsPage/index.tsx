import { HeartSVG } from "./HeartSVG";
import { capitalizeFirstLetter } from "../../utils";
import * as Styles from "./RatingsPage.Styles";
// import { useMutation } from "@apollo/client";

interface RatingsPagePropType {
    ratings: {
        id: number;
        reviewer: string;
        category: number;
        comment: string;
        rating: number;
        created_at: string;
    }[];
}

const RatingsPage = (props: RatingsPagePropType) => {
    const { ratings } = props;
    const getReadableDate = (date: Date) => date.toDateString().split(' ').slice(1).join(' ');

    return (
        <Styles.RatingsContainer>
            {ratings.map((rating, index) => {
                return (
                    <div key={rating.id}>
                        <Styles.Rating>
                            <HeartSVG count={rating.rating} />
                            <Styles.CommentText>{capitalizeFirstLetter(rating.comment)}</Styles.CommentText>
                            <Styles.AuthorDateContainer>
                                <Styles.Author>- {capitalizeFirstLetter(rating.reviewer)}</Styles.Author>
                                <Styles.DateContainer>{getReadableDate(new Date(rating.created_at))}</Styles.DateContainer>
                            </Styles.AuthorDateContainer>
                        </Styles.Rating>
                        {index !== ratings.length - 1 && (
                            <Styles.Line />
                        )}
                    </div>
                )
            })}
            {/*<div onClick={() => {console.log("Hey")}}>submit</div>*/}
        </Styles.RatingsContainer>
    );
};

export default RatingsPage;