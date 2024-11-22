import React, { useEffect, useRef } from "react";
import { Toast } from "primereact/toast";

export default function ToastMessage({ type, message }) {
  const toastRef = useRef(null);

  const showMessage = () => {
    toastRef.current.show({
      severity: type,
      summary: "",
      detail: message,
      life: 3000,
    });
  };

  useEffect(() => {
    message !== "" && showMessage();
  }, [message, type]);

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toastRef} position="top-center" />
    </div>
  );
}
