import * as express from "express";
import { reviewSchema, RS } from "../models/reviewSchema";

export const routerReview = express.Router();

routerReview.post("/createReview", (req, res) => {
  const review: RS = new reviewSchema({
    mediaReview: req.body.mediaReview,
    rating: req.body.rating,
    reviewerID: req.body.reviewerID,
    mediaTitle: req.body.mediaTitle,
  });
  try {
    review.save();
    res.json(review);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

routerReview.get("/", (req, res) => {
  if (req.body) {
    return res.json({
      statusCode: 404,
      error: "Not Found",
      message: "Not found",
    });
  }
});

routerReview.get("/getReview", (req, res) => {
  const findReview = reviewSchema.find({ contentID: req.body.contentID });
  if (findReview) {
    res.status(200);
  } else {
    res.status(404);
    console.log("Data Either Doesn't Exist, or Could Not Be Found ");
  }
  try {
    res.json({ findReview });
  } catch (err) {
    res.status(500);
    res.json(err);
    console.log(
      "Server Error Occurred: Error on sending json response [/getReview]"
    );
  }
});
