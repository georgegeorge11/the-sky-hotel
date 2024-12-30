import { restaurant, spa } from "../lounge.js";
import "animate.css";

export const Lounge = () => {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="text-center py-5 bg-light shadow rounded">
        <h1 className="display-4 fw-bold text-primary animate__animated animate__fadeInDown">
          Welcome to the Lounge
        </h1>
        <p className="lead text-muted animate__animated animate__fadeInUp">
          Experience luxury, comfort, and relaxation like never before.
        </p>
      </div>

      {/* Restaurant and Spa Section */}
      <div className="row mt-5 g-4">
        {/* Restaurant */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 border-0">
            <img
              src={restaurant.images[0]}
              alt="Restaurant Overview"
              className="card-img-top rounded-top"
            />
            <div className="card-body">
              <h3 className="card-title text-primary">Restaurant</h3>
              <p className="card-text">{restaurant.description}</p>
              <p>
                <strong>Capacity:</strong> {restaurant.capacity} guests, {restaurant.tables} tables.
              </p>
            </div>
            <div className="row px-3 pb-3">
              {restaurant.images.slice(1).map((image, index) => (
                <div key={index} className="col-6">
                  <img
                    src={image}
                    alt={`Restaurant ${index + 2}`}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spa */}
        <div className="col-md-6">
          <div className="card shadow-lg h-100 border-0">
            <img
              src={spa.images[0]}
              alt="Spa Overview"
              className="card-img-top rounded-top"
            />
            <div className="card-body">
              <h3 className="card-title text-primary">Spa</h3>
              <p className="card-text">{spa.description}</p>
              <ul className="list-group list-group-flush">
                {spa.treatments.map((treatment, index) => (
                  <li key={index} className="list-group-item">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    {treatment}
                  </li>
                ))}
              </ul>
            </div>
            <div className="row px-3 pb-3">
              {spa.images.slice(1).map((image, index) => (
                <div key={index} className="col-6">
                  <img
                    src={image}
                    alt={`Spa ${index + 2}`}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
