import React from "react";

const FeedBack = () => {
  return (
    <>
      <div className="feed-back">
        <h2>Our Testimonial</h2>
        <h1>Our Client Saying!</h1>
      </div>

      <div className="container-feed">
        <div className="container-feed1">
          <div className="back-feed">
            <p>
              The generated Lorem Ipsum is therefore always free from repetition{" "}
              <br /> injected humour, or non-characteristic words etc.
            </p>
            <hr style={{ color: "orange" }} />

            <div className="feed-back-img">
              <div>
                <img
                  src="./img/feed-back.jpg"
                  style={{ width: "150px", borderRadius: "50%" }}
                />
              </div>
              <div>
                <h2>clint</h2>
                <p>how are you baby</p>
              </div>
            </div>
          </div>

          <div className="back-feed">
            <p>
              The generated Lorem Ipsum is therefore always free from repetition{" "}
              <br /> injected humour, or non-characteristic words etc.
            </p>
            <hr style={{ color: "orange" }} />

            <div className="feed-back-img">
              <div>
                <img
                  src="./img/feed-back2.jpg"
                  style={{ width: "150px", borderRadius: "50%" }}
                />
              </div>
              <div>
                <h2>clint</h2>
                <p>how are you baby</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBack;
