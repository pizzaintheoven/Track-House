import {
    model,
    Schema,
    Model,
    Document
} from 'mongoose';

export interface RS extends Document {
    title: string,
    rating: number
}

const ReviewSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
        min: 6,
        max: 255
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
    }
});
export const reviewSchema: Model <RS> = model('AnimeReviews', ReviewSchema);