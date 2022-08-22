import { HeartSVG } from "./HeartSVG";
import { capitalizeFirstLetter } from "../../utils";
import * as Styles from "./RatingsPage.Styles";
import {useMutation} from "@apollo/client";
import {INSERT_RATINGS_ONE} from "../../graphql/queries";
import { useForm } from 'react-hook-form';

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

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [insertRating, { data, loading, error }] = useMutation(INSERT_RATINGS_ONE);

    const onSubmit = (data: any) => {
        insertRating({
            variables: {
                reviewer_first_name: data.firstName,
                reviewer_last_name: data.lastName,
                category: 2,
                comment: data.comment,
                rating: data.rating,
                email: data.email
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
                            <HeartSVG count={rating.rating} />
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

            <Styles.Form onSubmit={handleSubmit(onSubmit)}>
                <Styles.GradientBox background={"linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 10%, rgba(255,158,232,1) 100%)"}>
                    <Styles.FormInput type="email" placeholder="Email" {...register('email', { required: true })} />
                </Styles.GradientBox>
                {errors.email && <span>This is a required field</span>}
                <Styles.GradientBox background={"linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 30%, rgba(255,158,232,1) 100%)"}>
                    <Styles.FormInput type="text" placeholder="First Name" {...register('firstName', { required: true, min: 5, max: 20 })} />
                </Styles.GradientBox>
                {errors.firstName && <span>This is a required field</span>}
                <Styles.GradientBox>
                    <Styles.FormInput type="text" placeholder="Last Name (Optional)" {...register('lastName', { max: 20 })} />
                </Styles.GradientBox>
                <Styles.GradientBox background={"linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 70%, rgba(255,158,232,1) 100%)"}>
                    <Styles.FormInput type="number" placeholder={`Rating: 1.0 to 5.0`} {...register('rating', { required: true, min: 1, max: 5 })} />
                </Styles.GradientBox>
                {errors.rating && <span>This is a required field</span>}
                <Styles.GradientBox background={"linear-gradient(90deg, rgba(77,79,218,1) 0%, rgba(159,0,116,1) 100%, rgba(255,158,232,1) 100%)"}>
                    <Styles.FormInput type="text" placeholder="comment" {...register('comment', {required: true, minLength: 10, maxLength: 500 })} />
                </Styles.GradientBox>
                {errors.comment && <span>This is a required field</span>}
                <Styles.GradientBox background={"linear-gradient(90deg, rgba(255, 20, 20, 1) 0%, rgba(159,0,116,1) 20%, rgba(77,79,218,1) 100%)"}>
                    <Styles.FormSubmit type="submit"/>
                </Styles.GradientBox>
            </Styles.Form>

            <div onClick={(e) => {
                e.preventDefault();
                insertRating({
                    variables: {
                        reviewer_first_name: "random",
                        reviewer_last_name: "idk",
                        category: 2,
                        comment: "insert success",
                        rating: 4.52,
                        email: "testMail"
                    }
                })
                }}
            >
                Submit
            </div>
        </Styles.RatingsContainer>
    );
};

export default RatingsPage;