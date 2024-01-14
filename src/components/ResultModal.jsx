import {forwardRef} from 'react'

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal" >
      <h2>You {result}</h2>
      <p>The target time was {targetTime} seconds</p>
      <p>
        You stopped with <strong>X seconds left</strong>
      </p>
      <form>
        <button method="dialog">Close</button>
      </form>
    </dialog>
  );
})

export default ResultModal
