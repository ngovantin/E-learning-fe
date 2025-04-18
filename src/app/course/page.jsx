import CourseCard from "@/components/cards/CourseCard";
import ListLayout from "@/layout/ListLayout"

const TITLE = 'High-Quality Online English Courses | Effective Learning Pathways';

const DESCRIPTION = 'Explore our online English courses for all levels – from beginner to advanced. With clear learning paths, practical content, and experienced instructors, you\'ll learn faster, retain better, and communicate with confidence.';

const page = () => {
  return (
    <ListLayout title={TITLE} description={DESCRIPTION}>
        <div className="grid grid-cols-2 gap-2 md md:grid-cols-2 md:gap-3 lg:grid-cols-3">
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
        </div>
    </ListLayout>
  )
}
export default page