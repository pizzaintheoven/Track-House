import express from 'express';
import {logger} from '../core';
import {reviewSchema, RS} from '../models/reviewSchema';

export const routerReview = express.Router();

routerReview.post('/createReview', (req, res) => {
    const review: RS = new reviewSchema({
        title: req.body.title,
        rating: req.body.rating
    })
    review.save().catch(err => {logger.error(err), res.json({err})})
});

routerReview.get('/getReview', (req, res) => {
    const findReview = reviewSchema.find({ contentID: req.body.contentID })
    if (findReview) {
        res.status(200)
    } else {
        res.status(404)
        logger.error("Data Either Doesn't Exist, or Could Not Be Found ")
    }
    try {
        res.json({findReview})
    } catch {
        res.status(500)
        res.send("Server Error Occurred")
        logger.error("Server Error Occurred: Error on sending json response [/getReview]");
    } 
})