import webDev from '../assets/web-dev.svg';
import appDev from '../assets/App-dev.svg';
import graphic from '../assets/graphic.svg';
import digital from '../assets/digital.svg';
import { Course } from '../interface/Course';

// Create an array of course data
export const CoursesData: Course[] = [
    {
        id: 1,
        title: "Web Development",
        img: webDev,
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
        id: 2,
        title: "App Development",
        img: appDev,
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
        id: 3,
        title: "Graphic Design",
        img: graphic,
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
        id: 4,
        title: "Digital Marketing",
        img: digital,
        description: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
];
