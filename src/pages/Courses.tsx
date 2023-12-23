import CoursesCard from "../components/CoursesCard";
import Heading from "../components/Heading";
import { CoursesData } from "../utils/courses-data";

const Courses = () => {
    return (
        <section className="min-h-screen flex flex-col items-center md:mx-32 px-5 my-10">
            <Heading title="Our" subTitle="Courses" />

            <div className="flex flex-wrap justify-center gap-6 mt-6">
                {CoursesData.map((card) => (
                    <CoursesCard {...card} key={card.id} />
                ))}
            </div>
        </section>
    );
};

export default Courses;