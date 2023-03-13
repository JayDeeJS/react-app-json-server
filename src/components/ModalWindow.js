import { useEffect } from "react";

const ModalWindow = ({ handleAdd, title, setTitle, author, setAuthor, handleClose }) => {
  const keydown = (e) => {
    if (e.key === "Escape") handleClose();
  };

  useEffect(() => {
    window.addEventListener("keydown", keydown);
    return () => {
      window.removeEventListener("keydown", keydown);
    };
  }, []);

  return (
    <div className="modalWrapper" onClick={handleClose}>
      <div
        className="modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button onClick={handleAdd}>Add post</button>
      </div>
    </div>
  );
};

export default ModalWindow;
