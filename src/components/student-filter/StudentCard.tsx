
import { students } from "@/data/students";
import { HoverEffect } from "../ui/card-hover-effect";
 
const StudentCard = () => {
  return (
    <div className="mx-auto">
      <HoverEffect items={students}/>
    </div>
  );
}
export default StudentCard;