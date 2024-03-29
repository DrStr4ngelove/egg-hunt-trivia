// import { useTriviaModalProps} from './hooks'
import { Timer } from '../Timer'

export const TriviaModal = (props) => {
  const {closeModal, currentQuestion, revealAnswer, result } = props //useTriviaModalProps()
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <Timer onClose={closeModal} />
        </div>
        <p>{currentQuestion.question}</p>
        <button onClick={revealAnswer}>Show Answer</button>
        <p>{result}</p>
      </div>
    </div>
  )
}

export default TriviaModal