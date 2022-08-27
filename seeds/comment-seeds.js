const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Nunc rhoncus dui vel sem.",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
      "no more cheese for me.",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "please god bring me some lactaid.",
    user_id: 3,
    post_id: 3,
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;