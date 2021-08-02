import React from 'react';

const Review = () => {
    return (
        <div>
            <div className="page-title">
                <h4>Review</h4>
            </div>
            <form>
                <div className="review-form">
                    <div className="row">
                        <div className="form-group col">
                            <input type="text" className="form-control" autoComplete="off" placeholder="Enter Your Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <input type="text" className="form-control" autoComplete="off" placeholder="Your Profession" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <textarea rows="4" className="form-control" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col">
                            <input type="submit" className="brand-btn" id="reviewBtn" value="Submit" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Review;