import * as ReviewApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews: reviews,
});

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review: review,
});

export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId: reviewId,
});

export const fetchReviews = () => dispatch => {
    return ReviewApiUtil.fetchReviews().
        then(res => dispatch(receiveReviews(res)))
}


export const fetchReview = reviewId => dispatch => {
    return ReviewApiUtil.fetchReview(reviewId).
        then(res => dispatch(receiveReview(res)))
}

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review)
        .then(res => dispatch(receiveReview(res)))
);

export const updateReview = review => dispatch => (
    ReviewApiUtil.updateReview(review)
        .then(res => dispatch(receiveReview(res)))
);

export const deleteReview = reviewId => dispatch => (
    ReviewApiUtil.deleteReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)))
);