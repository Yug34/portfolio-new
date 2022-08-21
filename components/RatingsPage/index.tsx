import { HeartSVG } from "./HeartSVG";
import styled from "styled-components";
import {capitalizeFirstLetter, px2vw} from "../../utils";

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

const RatingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 100%;
`;

const Rating = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  margin: 8px 0;
  height: 2px;
  background-color: #777777;
  border-radius: 2px;
  width: 100%;
`;

const CommentText = styled.div`
  margin-top: 12px;
  margin-left: clamp(8px, ${px2vw(12)}, 12px);
`;

const AuthorDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Author = styled.div`
  font-weight: 600;
`;

const DateContainer = styled.div`
  color: #888888;
  font-style: italic;
`;

const RatingsPage = (props: RatingsPagePropType) => {
    const { ratings } = props;

    const getReadableDate = (date: Date) => date.toDateString().split(' ').slice(1).join(' ');

    return (
        <RatingsContainer>
            {ratings.map((rating, index) => {
                return (
                    <>
                        <Rating key={rating.id}>
                            <HeartSVG count={rating.rating} />
                            <CommentText>{capitalizeFirstLetter(rating.comment)}</CommentText>
                            <AuthorDateContainer>
                                <Author>- {capitalizeFirstLetter(rating.reviewer)}</Author>
                                <DateContainer>{getReadableDate(new Date(rating.created_at))}</DateContainer>
                            </AuthorDateContainer>
                        </Rating>
                        {index !== ratings.length - 1 && (
                            <Line />
                        )}
                    </>
                )
            })}
        </RatingsContainer>
    );
};

export default RatingsPage;