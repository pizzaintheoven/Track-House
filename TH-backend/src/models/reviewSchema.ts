import {
    model,
    Schema,
    Model,
    Document
} from 'mongoose';

export interface RS extends Document {
    title: string,
    rating: number,
    reviewerID: number,
    animeTitle: string,
}

const ReviewSchema: Schema = new Schema({
    mediaTitle: {
        type: String,
        required: true,
        min: 6,
        max: 52
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 12
    },
    reviewerID: {
        type: String,
        required: true,
    },
    mediaReview: {
        type: String,
        required: true,
        min: 6,
        max: 1256
    }
});
export const reviewSchema: Model <RS> = model('AnimeReviews', ReviewSchema);