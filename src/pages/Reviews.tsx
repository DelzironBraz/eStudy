import Heading from "../components/Heading";
import ReviewCard from "../components/ReviewCard";
import { ReviewsData } from "../utils/reviews-data";

const Reviews = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center md:px-32 px5">
            <Heading title="Our" subTitle="Reviews" />

            <div className="flex flex-col md:flex-row gap-5 mt-5">
                {ReviewsData.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>
        </section>
    );
};

export default Reviews;