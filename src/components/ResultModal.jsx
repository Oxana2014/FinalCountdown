import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { timeRemaining, targetTime, onReset },
  ref
) {

    const userLost = timeRemaining <= 0
    const formattedRemainingTime = (timeRemaining / 1000).toFixed(2)

  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="result-modal">
     {userLost && <h2>You lost</h2>} 
      <p>The target time was {targetTime} seconds</p>
      <p>
        You stopped with <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button >Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
