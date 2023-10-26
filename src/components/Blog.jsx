import React from "react";

export default function Blog(props) {
  return (
    <main className="blog--cards">
      <div className="card">
        <div className="image--container">
          <img
            src={props.imageUrl}
            alt="Mount Fuji"
            className="blog--imageUrl"
          />
        </div>
        <div className="blog--details">
          <div className="blog--location-container">
            <i className="fa-solid fa-location-dot"></i>
            <h3 className="blog--location">{props.location}</h3>
            <a
              href={props.googleMapsUrl}
              className="googleMapsUrl"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="blog--title">{props.title}</h1>
          <p className="blog--dates">
            {props.startDate} - {props.endDate}
          </p>
          <p className="blog--description">{props.description}</p>
        </div>
      </div>
    </main>
  );
}
