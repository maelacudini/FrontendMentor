import React from "react";
import style from "../css/app.module.css";
import Country from "./Country";

const Countries = ({ filteredData, mode, data }) => {
  return (
    <div className={style.countries}>
      {(filteredData ? filteredData : data).map((country, index) => (
        <div
          data-bs-toggle="modal"
          data-bs-target={`#${index}`}
          className={
            mode === "light"
              ? `card p-2 ${style.cardCountriesLight}`
              : `card p-2 ${style.cardCountriesDark}`
          }
          key={country.name.common}
        >
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className={`card-img-top`}
            style={{ objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{country.name.common}</h5>
            <p className="card-text">Capital: {country.capital}</p>
            <p className="card-text">Population: {country.population}</p>
            <p className="card-text">Region: {country.region}</p>
          </div>
          <Country index={index} data={country} mode={mode} />
        </div>
      ))}
    </div>
  );
};

export default Countries;
