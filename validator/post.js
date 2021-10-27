const { body } = require("express-validator");

exports.createPostValidator = [
  // title
  body("title", "Title is required").notEmpty(),
  body("title", "Title must be between 3 to 150 characters").isLength({
    min: 3,
    max: 150,
  }),

  // body
  body("body", "Body is required").notEmpty(),
  body("body", "Body must be between 3 to 2000 characters").isLength({
    min: 3,
    max: 2000,
  }),
];

exports.updatePostValidator = [
  // title
  body("title", "Title must be between 3 to 150 characters")
    .isLength({
      min: 3,
      max: 150,
    })
    .optional({ checkNull: true }),

  // body
  body("body", "Body must be between 3 to 2000 characters")
    .isLength({
      min: 3,
      max: 2000,
    })
    .optional({ checkNull: true }),
];
