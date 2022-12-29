import lessons from "../../mocks/lessonsPlan";

import './style.css';

function Lessons() {
    return (
      <div className="lessons">
        <p>Lesson plan</p>
        <div className="lessons-container">
         {
            lessons.map(({number, title, description}, index) => (
              <div key={index} className="lessons-info">
                <p className="number-lesson">{number}</p>
                <div className="lesson-text">
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
              </div>
            ))
         }
         <button className="seemore-button">
          Ver todos
        </button>
        </div>
      </div>
    );
}
  
export default Lessons;