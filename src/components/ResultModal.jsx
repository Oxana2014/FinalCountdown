export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="result-modal" >
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
}
