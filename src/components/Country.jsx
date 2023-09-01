import style from "../css/app.module.css";

const Country = ({ data, index, mode }) => {
  return (
    <div
      className="modal fade"
      id={index}
      tabIndex="-1"
      aria-labelledby={index}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div
          className={
            mode === "light"
              ? `modal-content ${style.modalLight}`
              : `modal-content ${style.modalDark}`
          }
        >
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={index}>
              {data.name.common}
            </h1>
          </div>
          <div className="modal-body">
            <img src={data.flags.png} alt="flag" width={"100%"} />
            <ul className="mb-0 mt-4 p-0 list-unstyled">
              <li>
                <b>Official Name:</b> {data.name.official}
              </li>
              <li>
                <b>Population:</b> {data.population}
              </li>
              <li>
                <b>Region:</b> {data.region}
              </li>
              <li>
                <b>Capital:</b> {data.capital}
              </li>
              <li>
                <b>Subregion:</b> {data.subregion}
              </li>
              <li>
                <b>Currency:</b>{" "}
                {Object.keys(data.currencies).map((currency) => (
                  <span key={currency}>
                    {data.currencies[currency].name} (
                    {data.currencies[currency].symbol}){" "}
                  </span>
                ))}
              </li>
              <li>
                <b>Languages:</b>{" "}
                {Object.keys(data.languages).map((key) => (
                  <span key={key}>{data.languages[key]} </span>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
