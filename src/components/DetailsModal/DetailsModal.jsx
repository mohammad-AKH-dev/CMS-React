import { useEffect } from "react";
import "./DetailsModal.css";
import { createPortal } from "react-dom";

export default function DetailsModal({ onHide , children}) {
  useEffect(() => {
    function checkKey() {
      onHide();
    }
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        checkKey();
      }
    });

    return () => window.removeEventListener("keyup", checkKey);
  });

  return createPortal(
    <div className="modal-parent active">
      <div className="details-modal">
       {children}
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
