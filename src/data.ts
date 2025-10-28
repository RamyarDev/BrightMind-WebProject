export interface Course {
  title: string;
  lessons: number;
  students: number;
  rating: number;
  duration: string;
  instructor: string;
  price: number;
}
export interface accordionBoxesTypes {
  title: string;
  description: string;
}
// Boxes-Data
export const coursesData: Course[] = [
  // Box-1
  {
    title: "Complete Digital Marketing Mastery Course",
    lessons: 20,
    students: 811,
    rating: 4.5,
    duration: "4h 30m",
    instructor: "Eleanor Pena",
    price: 32,
  },
  // Box-2
  {
    title: "Entrepreneurship & Business Growth Strategies Course",
    lessons: 47,
    students: 423,
    rating: 4.6,
    duration: "6h 20m",
    instructor: "Guy Hawkins",
    price: 42,
  },
  // Box-3
  {
    title: "Full-Stack Web Development Bootcamp Program",
    lessons: 32,
    students: 423,
    rating: 4.6,
    duration: "4h 30m",
    instructor: "Leslie Alexander",
    price: 62,
  },
  // Box-4
  {
    title: "Graphic Design Essentials: From Beginner to Pro Guide",
    lessons: 17,
    students: 43,
    rating: 5,
    duration: "5h 10m",
    instructor: "Darrell Steward",
    price: 12,
  },
  // Box-5
  {
    title: "Personal Finance & Smart Investment Strategies",
    lessons: 87,
    students: 23,
    rating: 4.9,
    duration: "3h 30m",
    instructor: "Cody Fisher",
    price: 45,
  },
  // Box-6
  {
    title: "AI & Machine Learning: A Complete Guide Training",
    lessons: 49,
    students: 42,
    rating: 4.1,
    duration: "8h 30m",
    instructor: "Kathryn Murphy",
    price: 62,
  },
];
export const accordionBoxesData: accordionBoxesTypes[] = [
  // Box-1
  {
    title: "What Is BrightMind?",
    description:
      " Our instructors are industry experts with years of experience in their respective fields. They bring real-world insights and practical knowledge to the courses to ensure that learners gain valuable and applicable skills.",
  },
  // Box-2
  {
    title: "What Is BrightMind?",
    description:
      " Our instructors are industry experts with years of experience in their respective fields. They bring real-world insights and practical knowledge to the courses to ensure that learners gain valuable and applicable skills.",
  },
  // Box-3
  {
    title: "What Is BrightMind?",
    description:
      " Our instructors are industry experts with years of experience in their respective fields. They bring real-world insights and practical knowledge to the courses to ensure that learners gain valuable and applicable skills.",
  },
  // Box-4
  {
    title: "What Is BrightMind?",
    description:
      " Our instructors are industry experts with years of experience in their respective fields. They bring real-world insights and practical knowledge to the courses to ensure that learners gain valuable and applicable skills.",
  },
  // Box-5
  {
    title: "What Is BrightMind?",
    description:
      " Our instructors are industry experts with years of experience in their respective fields. They bring real-world insights and practical knowledge to the courses to ensure that learners gain valuable and applicable skills.",
  },
];
