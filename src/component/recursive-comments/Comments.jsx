import React, { useState } from "react";
import Comment from "./Comment";

const Comments = () => {
  let found = false;
  const [comment, setComment] = useState("");

  const [comments, setComments] = useState([
    {
      id: 1,
      comment: "This is the main comment",
      replys: [
        {
          id: 2,
          comment: "This is the secondary comment",
          replys: [
            { id: 3, comment: "This is the secondary comment", replys: [] },
          ],
        },
      ],
    },
  ]);

  const newComment = (text) => ({
    id: new Date().getTime(),
    comment: text,
    replys: [],
  });

  const addReply = (text, parentId) => {
    let data = [...comments];
    console.log("adding texxt", text);
    addComments(text, parentId, data);
    setComments(data);
  };

  const handleNewComment = () => {
    setComments([newComment(comment), ...comments]);
    setComment("");
  };

  const addComments = (text, parentId, data) => {
    data.forEach((commentData) => {
      if (parentId.toString() === commentData.id.toString()) {
        console.log("adding comment", data, text);
        commentData.replys.unshift(newComment(text));
        found = true;
      }

      if (!found) {
        addComments(text, parentId, commentData.replys);
      }
    });
  };

  return (
    <div className="faqs">
      <h1>Comments</h1>
      <div>
        <input
          type="text"
          value={comment}
          placeholder="Add New Comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleNewComment}>Add</button>
      </div>
      <div>
        {comments &&
          comments.length > 0 &&
          comments.map((comment, index) => (
            <Comment key={index} {...comment} addReply={addReply} />
          ))}
      </div>
    </div>
  );
};

export default Comments;
