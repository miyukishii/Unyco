import courses from "../../mocks/courses";

import './style.css';

function Courses() {
  return (
    <div className="courses">
      <p>Más cursos</p>
      <div className="courses-container">
        {
          courses.map(({professor, subject, image}, index) => (
            <div key={index} className="course">
              <img src={image} alt={professor} />
              <div className="course-info">
                <p>{professor}</p>
                <p><span>enseña </span>{subject}</p>
              </div>
            </div>
           ))
        }
      </div>
    </div>
  );
}
  
export default Courses;