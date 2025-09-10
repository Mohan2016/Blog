import React, { useState } from 'react';
// import './PostSection.css'; // Optional: for your styles
import img3 from '../assets/images/3.jpg';
// import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/banner300x250.png';
import img8 from '../assets/images/photography_2.jpg';


const PostSection = () => {

  const [isExpanded, setIsExpanded] = useState(false); // ✅ Add state
  return (
    <section className="Sect_post">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-9 col-md-9 col-12">
            {/* Main Post */}
            <div className="left_bx">
              <div className="title-heading ">
                <h2>Beauty of Nature</h2>
                <p><span>July 12, 2025</span></p>
              </div>
              <div className="post_img wow animate__animated animate__slideInLeft">
                {/* <img src="/images/3.jpg" className="img-fluid" alt="Beauty of Nature" /> */}
                <img src={img3} alt="" className="img-fluid" />
              </div>
              <div className="text_dls mt-5">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                  {isExpanded && (
                    <>
                      <br />
                      Here is some more detailed content that becomes visible when you click "Read More".
                      You can expand this as needed with any HTML or components.
                    </>
                  )}
                </p>

                {/* ✅ Toggle Button */}
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? 'Hide' : 'Read More'}
                </button>
              </div>
            </div>
          

          <div className="post_info_cat">
            <span>
              <a href="#">Art</a> &nbsp;/ <a href="#">Lifestyle</a>
            </span>
          </div>

          {/* More Posts (Grouped in rows of 2) */}
          <div className="row">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="left_bx mt-5">
                    <div className="post_img2 wow animate__animated animate__slideInLeft">
                      {/* <img src={`/images/${i + 3}.jpg`} className="img-fluid" alt={`Post ${i + 1}`} /> */}
                      <img src={img3} alt="" className="img-fluid" />
                    </div>
                    <div className="title-heading2">
                      <h2>Fashion Model Shoot</h2>
                      <p><span>July 12, 2025</span></p>
                    </div>
                    <div className="text_dls mt-5">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="left_bx mt-5">
                    <div className="post_img2 wow animate__animated animate__slideInRight">
                      <img src={img5} alt="" className="img-fluid" />
                    </div>
                    <div className="title-heading2">
                      <h2>Golden Snow Land</h2>
                      <p><span>July 12, 2025</span></p>
                    </div>
                    <div className="text_dls mt-5">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
            </div>
          {/* Right Sidebar */}
          <div className="col-lg-3 col-md-3 col-12">
            <div className="page_right wow animate__animated animate__slideInRight">
              <div className="sect_1">
                <h2>About Me</h2>
                <div className="post_img3 mt-3 mb-3">
                  <img src={img8} className="img-fluid" alt="About Me" />
                </div>
                <div className="text_dls mt-5">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <a href="#">Read More</a>
                </div>
              </div>

              <div className="sect_2">
                <h2>Subscribe to my Newsletter</h2>
                <form>
                  <input type="email" placeholder="Your Email Address" />
                  <button type="submit">Subscribe</button>
                </form>
              </div>

              <div className="sect_3">
                <h2>Follow me on</h2>
                <ul>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>

              <div className="Custom_Ads">
                <img width="306" height="256" src={img6} className="img-fluid" alt="Ad Banner" />
              </div>

              <div className="sect_4">
                <h2>Categories</h2>
                <ul>
                  <li><a href="#">Art</a></li>
                  <li><a href="#">Food</a></li>
                  <li><a href="#">Lifestyle</a></li>
                  <li><a href="#">Movie</a></li>
                  <li><a href="#">Music</a></li>
                  <li><a href="#">Top</a></li>
                  <li><a href="#">Travel</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default PostSection;
