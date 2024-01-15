import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
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
});

export default ResultModal;
