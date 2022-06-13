
const ReviewSection = () => {
    const reviews = [
        { id: "1", imgPath: "https://i.imgur.com/9kXwAf8.jpg" },
        { id: "2", imgPath: "https://i.imgur.com/Ne4t0uG.jpg" },
        { id: "3", imgPath: "https://i.imgur.com/mvkq1VS.jpg" },
        { id: "4", imgPath: "https://i.imgur.com/c87BXKG.jpg" },
    ];

    const renderReviews = (item) => {
        return (
            <div className="card shadow-lg bg-dark col-lg-3 col-md-6 border-0 m-2">
                <img className="card-img-top m-auto rounded" src={item.imgPath} alt="" />
            </div>
        );
    }

    return (
        <div className="review-section__top-margin">
            <div className="horizontal-line mb-5"><span className="h3 text-center mt-5 mb-4 reviews-margin__top our-best-seller-font">
                Reviews
            </span></div>
            <div className="row">
                <div className="mx-auto col">
                    <div className="d-flex flex-row flex-wrap justify-content-around">
                        {reviews.map(renderReviews)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewSection;