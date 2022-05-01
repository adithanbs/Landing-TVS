import React from 'react'
import blog1 from "../../../images/blog1.jpg"
import one from "../../../images/one.jpg"

import blog2 from "../../../images/blog2.jpg"
import "./blogs.css"

function Blogs() {
  return (
    <>
      <div className="container">
      <div className="title_con" >
        <h2>Politics</h2>
        <div className="title_under_line" ></div>
        </div>
        <div className="row   g-3  mb-5 ">
          <div className="col-lg-4 col-12 col-md-6">
            <div className="box">
              <div className="card h-100">
                <img src={blog1} className="img-fluid blog-img h-100" />
                <div class="card-img-overlay text-white blog-text-overlay ">
                  <h3 >
                    Lin-manuel miranda says Donald Trump sprading 'a virulent
                    strain of virus'
                  </h3>
                  <p class="card-text mt-3">Jonnathan due</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-6">
            <div className="box ">
              <div className="card shadow-lg  mb-3 h-100">
                <img src={blog2} className="card-img-top blog-img" />
                <div className="card-body">
                  <h4 style = {{marginBottom:"70px"}}>
                    Jenny Lawson is publishing a new book and its sort of a
                    coloring book
                  </h4>
                  <p class="card-text mt-3">Jonnathan due</p>
                </div>
              </div>
              <div className="card shadow-lg ">
                <div className="card-body">
                  <h4>
                    Airtel offer 3Gb data a month to comsumer who switch to its
                    4g service
                  </h4>
                  <p class="card-text mt-4">Alice due</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-12">
            <div className="row">
              <div className="col-lg-12 col-12 col-md-6">
                <div className="card bg-transparent border-top-0 border-start-0 border-end-0 border-3">
                  <div className="card-body pt-lg-0">
                    <h5>
                      Airtel offer 3Gb data a month to comsumer who switch to
                      its 4g service
                    </h5>
                    <p class="card-text mt-4">Alice due</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-12 col-md-6">
                <div className="card bg-transparent border-top-0 border-start-0 border-end-0 border-3">
                  <div className="card-body">
                    <h5>
                      Airtel offer 3Gb data a month to comsumer who switch to
                      its 4g service
                    </h5>
                    <p class="card-text mt-4">Alice due</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-12 col-md-6">
                <div className="card bg-transparent border-top-0 border-start-0 border-end-0 border-3">
                  <div className="card-body">
                    <h5>
                      Airtel offer 3Gb data a month to comsumer who switch to
                      its 4g service
                    </h5>
                    <p class="card-text mt-4">Alice due</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-12 col-md-6">
                <div className="card bg-transparent border-0">
                  <div className="card-body">
                    <h5>
                      Airtel offer 3Gb data a month to comsumer who switch to
                      its 4g service
                    </h5>
                    <p class="card-text mt-4">Alice due</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs
