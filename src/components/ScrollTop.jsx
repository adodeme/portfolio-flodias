import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
    show && (
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="
          fixed
          bottom-6
          right-6
          p-4
          rounded-full
          bg-cyan-500
        "
      >
        <FaArrowUp />
      </button>
    )
  );
}