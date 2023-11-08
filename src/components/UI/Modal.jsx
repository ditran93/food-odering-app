import ReactDOM from "react-dom";

export default function Modal({children}) {
  const portalElement = document.getElementById("modal");
  return (
    <>
      {ReactDOM.createPortal(
        <dialog>{children}</dialog>,
        portalElement
      )}
    </>
  );
}
