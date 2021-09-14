import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.fetchReviews(this.props.product.id);
        // debugger
    }

    render() {
        // debugger
        if (!this.props.reviews) { 
            // debugger;
            return null;
        }
        // debugger
        // debugger

        let currentUserId = undefined;
        if (this.props.currentUser) {
            currentUserId = this.props.currentUser.id;
        }
        const allReviews = this.props.reviews.map(review => {
            // console.log(this.props.product);
            return (
                <ReviewIndexItem
                    key={review.id}
                    review={review}
                    body={review.body}
                    rating={review.rating}
                    createdAt={review.created_at}
                    productId={review.product_id}
                    authorId={review.author_id}
                    productId={this.props.product.id}
                    currentUserId={currentUserId}
                    // email={this.props.fetchUser(this.props.user)}
                />
            )
        });

        // debugger
        return (
            <div>
                {allReviews}
            </div>
        )
    }
}

export default ReviewIndex;