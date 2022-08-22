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

    const onSubmit = (data: any) => {
        console.log(data)
    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [insertRating, { data, loading, error }] = useMutation(INSERT_RATINGS_ONE)

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

            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" {...register('email', { required: true })} />
                {errors.email && <span>This is a required field</span>}
                <input type="text" placeholder="First Name" {...register('firstName', { required: true, min: 5, max: 20 })} />
                {errors.firstName && <span>This is a required field</span>}
                <input type="text" placeholder="Last Name (Optional)" {...register('lastName', { max: 20 })} />
                <input type="number" placeholder={`Rating: 1.0 to 5.0`} {...register('rating', { required: true, min: 1, max: 5 })} />
                {errors.rating && <span>This is a required field</span>}
                <input type="text" placeholder="comment" {...register('comment', {required: true, minLength: 10, maxLength: 300 })} />
                {errors.comment && <span>This is a required field</span>}
                <input type="submit"/>
            </form>

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