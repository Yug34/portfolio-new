import { HeartSVG } from "./HeartSVG";
import { capitalizeFirstLetter } from "../../utils";
import * as Styles from "./RatingsPage.Styles";
import {useMutation, useQuery} from "@apollo/client";
import {GET_RATINGS, INSERT_RATINGS_ONE} from "../../graphql/queries";
import { useForm } from 'react-hook-form';
import {Flex} from "../Common/Flex";
import {useEffect, useState} from "react";

interface RatingsPagePropType {
    ratings: {
        id: number;
        reviewer_first_name: string;
        reviewer_last_name?: string | null;
        category: number;
        comment: string;
        rating: number;
        created_at: string;
    }[];
}

const RatingsPage = (props: RatingsPagePropType) => {
    const { ratings } = props;
    const [ratingsData, setRatingsData] = useState<any[]>(props.ratings);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [insertRating, { data, loading, error }] = useMutation(INSERT_RATINGS_ONE, {
        onCompleted: (data1) => {
            setRatingsData([ratingsData.push(data1.insert_ratings_one)]);
        }
    });

    const onSubmit = (queryData: any) => {
        insertRating({
            variables: {
                reviewer_first_name: queryData.firstName,
                reviewer_last_name: queryData.lastName,
                category: 2,
                comment: queryData.comment,
                rating: queryData.rating,
                email: queryData.email
            }
        });
    };

    const getReadableDate = (date: Date) => date.toDateString().split(' ').slice(1).join(' ');

    return (
        <Styles.RatingsContainer>
            {ratings.map((rating, index) => {
                return (
                    <div key={rating.id}>
                        <Styles.Rating>
                            <Flex align={"flex-end"}>
                                <HeartSVG count={rating.rating} />
                                <div style={{fontSize: '10px', lineHeight: '10px', color: '#a0a0a0'}}>{Math.floor(rating.rating * 100)/100} / 5</div>
                            </Flex>
                            <Styles.CommentText>{capitalizeFirstLetter(rating.comment)}</Styles.CommentText>
                            <Styles.AuthorDateContainer>
                                <Styles.Author>- {capitalizeFirstLetter(rating.reviewer_first_name)} {capitalizeFirstLetter(rating.reviewer_last_name ? rating.reviewer_last_name : "")}</Styles.Author>
                                <Styles.DateContainer>{getReadableDate(new Date(rating.created_at))}</Styles.DateContainer>
                            </Styles.AuthorDateContainer>
                        </Styles.Rating>
                        {index !== ratings.length - 1 && (
                            <Styles.Line />
                        )}
                    </div>
                )
            })}

            <Flex justify={"center"} mt={"3rem"}>Leave a review or something, idk!</Flex>
            <Styles.Form onSubmit={handleSubmit(onSubmit)}>
                <Styles.GradientBox background={"linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 0%, rgba(255,158,232,1) 100%)"}>
                    <Styles.FormInput type="email" placeholder="Email" {...register('email', { required: true })} />
                </Styles.GradientBox>
                {errors.email && <span>This is a required field</span>}
                <Styles.GradientBox background={"linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 50%, rgba(255,158,232,1) 100%)"}>
                    <Styles.FormInput type="text" placeholder="First Name" {...register('firstName', { required: true, min: 5, max: 20 })} />
                </Styles.GradientBox>
                {errors.firstName && <span>This is a required field</span>}
                <Styles.GradientBox>
                    <Styles.FormInput type="text" placeholder="Last Name (Optional)" {...register('lastName', { max: 20 })} />
                </Styles.GradientBox>
                <Styles.GradientBox background={"linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 90%, rgba(255,158,232,1) 100%)"}>
                    <Styles.FormInput step='0.01' type="number" max={5} min={1} placeholder={`Rating: 1.0 to 5.0`} {...register('rating', { required: true, min: 1, max: 5 })} />
                </Styles.GradientBox>
                {errors.rating && <span>This is a required field</span>}
                <Styles.GradientBox background={"linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 100%, rgba(255,158,232,1) 100%)"}>
                    <Styles.FormInput type="text" placeholder="Comment" {...register('comment', {required: true, maxLength: 500 })} />
                </Styles.GradientBox>
                {errors.comment && <span>This is a required field</span>}
                <Styles.GradientBox style={{marginTop: '6px'}} background={"linear-gradient(90deg, rgba(255, 20, 20, 1) 0%, rgba(159,0,116,1) 20%, rgba(77,79,218,1) 100%)"}>
                    <Styles.FormSubmit type="submit"/>
                </Styles.GradientBox>
            </Styles.Form>
        </Styles.RatingsContainer>
    );
};

export default RatingsPage;