import { body, validationResult } from "express-validator";

const validationJob = [
  // Validate string fields
  body("location").notEmpty().withMessage("Location is required"),
  body("company").notEmpty().withMessage("Company is required"),
  body("title").notEmpty().withMessage("Title is required"),
  body("description").notEmpty().withMessage("Description is required"),
  body("logo").notEmpty().withMessage("Logo is required"),
  body("currency").notEmpty().withMessage("Currency is required"),
  body("jobType").notEmpty().withMessage("Job type is required"),
  body("experience").notEmpty().withMessage("Experience is required"),

  // Validate number field
  body("salary").isNumeric().withMessage("Salary must be a number"),

  // Validate boolean field
  body("isbookmarked")
    .isBoolean()
    .withMessage("Bookmark status must be a boolean"),

  // Handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default validationJob;
