import { FiThumbsUp } from 'react-icons/fi';
import { AiOutlineCheckCircle } from 'react-icons/ai';


import comments from "../../mocks/comments";
import './style.css';

function Comments() {
    return (
      <>
      <div className="comments-mobile">
        <p>Comentários de Usuários</p>
        <div className="comments-container">
         {
            comments.map(({name, comment}, index) => (
              <div key={index} className="comment">
                <p>{comment}</p>
                <p className="comment-author">{name}</p>
              </div>
            ))
         }
        </div>
      </div>

      <div className="comments-desktop">
        <p>Comentarios de los estudiantes</p>
        <div className='subtitle-comments'>
          <FiThumbsUp />
          <p>98.7% de valoraciones positivas <span>/ total de 726 valoraciones</span></p>
        </div>
        <div className="comments-container">
         {
            comments.map(({image, name, comment, feedback, date}, index) => (
              <div key={index} className="comment">
                <img src={image} alt='avatar'/>
                <div className='student-comment'>
                  <p>{name}<span>{` - hace ${date}`}</span></p>
                  <p className='comment-text'>{comment}</p>
                  {
                    (feedback) &&
                    <div className='feedback'>
                      <p>{feedback.comment}</p>
                      <div>
                        <AiOutlineCheckCircle />
                        <p>{feedback.from} <span>{`- hace ${feedback.date}`}</span></p>
                      </div>
                    </div>
                  }
                </div>
              </div>
            ))
         }
        </div>
        <button type='button'>
          Ver más
        </button>
      </div>
      </>
    );
  }
  
  export default Comments;