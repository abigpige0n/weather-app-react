import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <h3>
        <a
          href="https://github.com/abigpige0n/my-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source code
        </a>{" "}
        by Sarah Lefebvre and
        <a
          href="https://www.netlify.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          hosted by Netlify
        </a>
      </h3>
    </div>
  );
}
