import { useEffect, useState } from "react";
import { FaBed, FaGift, FaCalendarAlt } from "react-icons/fa";
import { bookingLists } from "../bookings";
import Slider from "react-slick";
import './style.css';

export const Bookings = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    setOffers(bookingLists);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="bookings-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">
          🎉 <span className="highlight">Exclusive Booking Offers</span> 🎉
        </h2>
        <div className="row">
          {offers.map((offer) => (
            <div key={offer.id} className="col-md-6 col-lg-4 my-3">
              <div className="card offer-card shadow-lg h-100 position-relative rounded overflow-hidden">
                <div className="card-body d-flex flex-column p-4">
                  {/* Title and Date */}
                  <h5 className="card-title text-center text-primary">
                    {offer.title}
                  </h5>
                  <p className="text-center text-muted">
                    <FaCalendarAlt className="me-2" />
                    {offer.date}
                  </p>

                  {/* Image Slider */}
                  <div className="image-gallery mb-3">
                    <Slider {...sliderSettings}>
                      {offer.images.map((image, index) => (
                        <div key={index}>
                          <img
                            src={image}
                            alt={offer.title}
                            className="img-fluid rounded"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>

                  {/* Description */}
                  <p className="card-text">{offer.description}</p>

                  {/* Packages (if available) */}
                  {offer.packages && (
                    <div>
                      <h6>Packages:</h6>
                      <ul className="list-unstyled">
                        {offer.packages.map((pkg, index) => (
                          <li key={index}>
                            <FaBed className="me-2 text-success" />
                            {pkg.details}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Includes (if available) */}
                  {offer.includes && (
                    <div>
                      <h6>What’s Included:</h6>
                      <ul className="list-unstyled">
                        {offer.includes.map((item, index) => (
                          <li key={index}>
                            <FaGift className="me-2 text-danger" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Call-to-Action Button */}
                  <div className="mt-auto text-center">
                    <button className="btn btn-primary glow-on-hover" onClick={() => alert("Booking form coming soon!")}>
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
