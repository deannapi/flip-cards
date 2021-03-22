import React from 'react';
import pi from '../images/pi_color.png';
import $ from 'jquery';;

$(function () {
    $(".material-card > .mc-btn-action").on("click", function () {
      var card = $(this).parent(".material-card");
      var icon = $(this).children("i");
      icon.addClass("fa-spin-fast");
  
      if (card.hasClass("mc-active")) {
        card.removeClass("mc-active");
  
        window.setTimeout(function () {
          icon
            .removeClass("fa-arrow-left")
            .removeClass("fa-spin-fast")
            .addClass("fa-bars");
        }, 800);
      } else {
        card.addClass("mc-active");
  
        window.setTimeout(function () {
          icon
            .removeClass("fa-bars")
            .removeClass("fa-spin-fast")
            .addClass("fa-arrow-left");
        }, 800);
      }
    });
  });

  export default class PI extends React.Component {
    render() {
      return (
        <>
         <div className="col-md-4 col-sm-6 col-xs-12">
          <article className="material-card Cyan">
            <h2>
              <span>Mmm pi...</span>
            </h2>
            <div className="mc-content">
              <div className="img-container">
                <img
                  className="img-responsive"
                  src={pi}
                  alt="pi"
                  style={{ width: "7em" }}
                />
              </div>
              <div className="mc-description">
                Flip the card for more details.
                <ul>
                  <span className="badge badge-pill badge-primary">HTML</span>
                  <span className="badge badge-pill badge-secondary">CSS</span>
                  <span className="badge badge-pill badge-success">
                    JavaScript
                  </span>
                  <span className="badge badge-pill badge-danger">jQuery</span>
                  <span className="badge badge-pill badge-light">
                    Express.js
                  </span>
                  <span className="badge badge-pill badge-warning">
                    Node.js
                  </span>
                  <span className="badge badge-pill badge-dark">REACT</span>
                </ul>
              </div>
            </div>
            <button className="mc-btn-action">
              <i className="fa fa-bars"></i>
            </button>
            <div className="mc-footer">
              <a
                href="https://github.com/deannapi/flip-cards"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://github.com/deannapi/flip-cards"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </article>
        </div>
      </>
    );
  }
}
