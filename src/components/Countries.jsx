import React from "react";
import style from "../css/app.module.css";
import Country from "./Country";

const Countries = ({ filteredData, mode }) => {
  return (
    <div className={style.countries}>
      {filteredData ? (
        filteredData.map((data, index) => (
          <div
            data-bs-toggle="modal"
            data-bs-target={`#${index}`}
            className={
              mode === "light"
                ? `card p-2 ${style.cardCountriesLight}`
                : `card p-2 ${style.cardCountriesDark}`
            }
            key={data.name.common}
          >
            <img
              src={data.flags.png}
              alt={`Flag of ${data.name.common}`}
              className={`card-img-top`}
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{data.name.common}</h5>
              <p className="card-text">Capital: {data.capital}</p>
              <p className="card-text">Population: {data.population}</p>
              <p className="card-text">Region: {data.region}</p>
            </div>
            <Country index={index} data={data} mode={mode} />
          </div>
        ))
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Countries;
