import { useEffect, useState } from "react";
import { organigramList } from "../organigram";

export const Contact = () => {

  const [organigramData, setOrganigramData] = useState([]);

  useEffect(()=>{
    setOrganigramData(organigramList)
  },[])

  const renderPerson = (person) => (
    <div className="list-item p-4 mb-3 border rounded shadow-sm">
      <div className="d-flex align-items-center">
        <img
          src={person.image}
          alt={person.position}
          className="rounded-circle me-3"
          width="80"
          height="80"
        />
        <div>
          <h5>{person.name}</h5>
          <p className="text-muted">{person.position}</p>
        </div>
      </div>
    </div>
  );

  // Recursive function to render subordinates as a list
  const renderSubordinates = (subordinates) => (
    <div className="ps-4">
      {subordinates.map((subordinate, index) => (
        <div key={index}>
          {renderPerson(subordinate)}
          {subordinate.subordinates && renderSubordinates(subordinate.subordinates)}
        </div>
      ))}
    </div>
  );

  return (
    <div className="container my-5">
    {/* Header */}
    <div className="text-center mb-4">
      <h1 className="display-4">Contact Us</h1>
      <p className="lead">We would love to hear from you! Reach out to us anytime.</p>
    </div>

    <div className="row">
      {/* Contact Form */}
      <div className="col-md-6">
        <h2 className="mb-4">Send Us a Message</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Enter subject" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>

      {/* Hotel Information */}
      <div className="col-md-6">
        <h2 className="mb-4">Our Contact Details</h2>
        <p className="mb-2"><strong>Address:</strong> Strada Pașcani, Brașov</p>
        <p className="mb-2"><strong>Phone:</strong> 0753829104</p>
        <p className="mb-2"><strong>Email:</strong> <a href="mailto:contact.thesky0@gmail.com">contact.thesky0@gmail.com</a></p>

        {/* Google Map */}
        <div className="mt-4">
          <h3>Visit Us</h3>
          <iframe
            title="Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.083839174505!2d-122.08424968469203!3d37.42206577982462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35c0253dd58b9%3A0x26c9c4b4c547e003!2zU3RyYWRhIFBhyJljYW5pLCBCcmHImW92!5e0!3m2!1sen!2sus!4v1633946629025!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>

    <div className="container mt-5">
      <h2 className="text-center mb-4">Hotel Management Organigram</h2>
      <div className="list-container">
        {organigramData.map((person, index) => (
          <div key={index}>
            {renderPerson(person)}
            {person.subordinates && renderSubordinates(person.subordinates)}
          </div>
        ))}
      </div>
    </div>

  </div>
  )
}
