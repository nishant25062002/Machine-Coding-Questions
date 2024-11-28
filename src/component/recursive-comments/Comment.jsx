import React, { useRef, useState } from "react";

const Comment = (props) => {
  const { comment, replys, id, addReply } = props;

  const inputRef = useRef(null);
  const [show, setShow] = useState(false);
  const [reply, setReply] = useState("");

  const handleCancel = () => {
    setShow(false);
    setReply("");
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      addReply(reply, id);
      handleCancel();
    } else if (e.key === "Escape") handleCancel();
  };

  return (
    <ul>
      <li> {comment}</li>
      <div>
        {show ? (
          <>
            <input
              ref={inputRef}
              onChange={(e) => setReply(e.target.value)}
              onKeyDown={(e) => handleInput(e)}
            />
            <button
              onClick={() => {
                addReply(reply, id);
                handleCancel();
              }}
            >
              Add
            </button>
            <button onClick={handleCancel}>cancel</button>
          </>
        ) : (
          <button
            onClick={() => {
              setShow(true);
              setTimeout(() => {
                inputRef?.current?.focus();
              }, 1);
            }}
          >
            comment
          </button>
        )}
      </div>

      {replys &&
        replys.length > 0 &&
        replys.map((replyData, index) => (
          <Comment key={index} {...replyData} addReply={addReply} />
        ))}
    </ul>
  );
};

export default Comment;
