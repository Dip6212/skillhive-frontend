import { useEffect, useState } from "react";

const CLOSED_KEY = "lead_popup_closed";
const SUBMITTED_KEY = "lead_popup_submitted";

const ONE_DAY = 24 * 60 * 60 * 1000;

const useLeadPopup = (delay = 10000) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const submitted = localStorage.getItem(SUBMITTED_KEY);

    if (submitted === "true") return;

    const lastClosed = localStorage.getItem(CLOSED_KEY);

    if (lastClosed) {
      const difference =
        Date.now() - Number(lastClosed);

      if (difference < ONE_DAY) return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const closePopup = () => {
    localStorage.setItem(
      CLOSED_KEY,
      Date.now().toString()
    );

    setOpen(false);
  };

  const formSubmitted = () => {
    localStorage.setItem(
      SUBMITTED_KEY,
      "true"
    );

    setOpen(false);
  };

  return {
    open,
    closePopup,
    formSubmitted,
  };
};

export default useLeadPopup;