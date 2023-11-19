import React from 'react';

// Import images
import videoBgImage from '../assets/images/video-bg.png';
import videoBannerImage from '../assets/images/video-banner-3.jpg';
import videoShape1Image from '../assets/images/video-shape-1.png';
import videoShape2Image from '../assets/images/video-shape-2.png';

function Video() {
  return (
    <div>
      <section
        className="video has-bg-image"
        aria-label="video"
        style={{ backgroundImage: `url(${videoBgImage})` }}
      >
        <div className="container">
          <div className="video-card">
            <div
              className="video-banner img-holder has-after"
            //   style={{ '--width': '', '--height': '' }}
            >
              <img
                src={videoBannerImage}
                width="970"
                height="550"
                loading="lazy"
                alt="video banner"
                className="img-cover"
              />

              <button className="play-btn" aria-label="play video">
                <ion-icon name="play" aria-hidden="true"></ion-icon>
              </button>
            </div>

            <img
              src={videoShape1Image}
              width="1089"
              height="605"
              loading="lazy"
              alt=""
              className="shape video-shape-1"
            />

            <img
              src={videoShape2Image}
              width="158"
              height="174"
              loading="lazy"
              alt=""
              className="shape video-shape-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Video;
