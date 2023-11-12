import { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

export default function Modal({ children, open, className = "", onClose }) {
  const dialog = useRef();
  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  return (
    <>
      {ReactDOM.createPortal(
        <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
          {children}
        </dialog>,
        document.getElementById("modal")
      )}
    </>
  );
}
