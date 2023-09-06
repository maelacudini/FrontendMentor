import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import style from "./css/app.module.css";
import Items from "./components/Items";
import { Fragment, useEffect, useState } from "react";
import header from "./images/bg-header-desktop.svg";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setLoading(false);
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }, []);

  function filterData(query) {
    if (query && query.trim().length > 0) {
      const keywords = query.toLowerCase().split(" ");

      const filtered = data.filter((item) => {
        return keywords.every((keyword) => {
          return item.languages.some((language) =>
            language.toLowerCase().includes(keyword)
          );
        });
      });

      setFilteredData(filtered);
      setSelectedKeywords(keywords);
    } else {
      setFilteredData(data);
      setSelectedKeywords([]);
    }
  }

  function removeKeyword(index) {
    const updatedKeywords = [...selectedKeywords];
    updatedKeywords.splice(index, 1);
    setSelectedKeywords(updatedKeywords);
    const newQuery = updatedKeywords.join(" ");
    setQuery(newQuery);
    filterData(newQuery);
  }

  return (
    <Fragment>
      <img
        src={header}
        alt="header"
        width={"100%"}
        height={"100%"}
        style={{ backgroundColor: "hsl(180, 29%, 50%)" }}
      />

      <div className={`${style.filter}`}>
        <input
          type="text"
          className="form-control p-3"
          id="floatingInput"
          placeholder="HTML"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            filterData(e.target.value);
          }}
        />
        <div className={`${style.tags}`}>
          {selectedKeywords.map((keyword, index) => (
            <div
              key={index}
              className={`input-group me-3 ${style.tag}`}
              style={{ width: "25%" }}
            >
              <span className={`form-control text-center ${style.textTag}`}>
                {keyword}
              </span>
              <span
                className={`input-group-text ${style.deleteTag}`}
                onClick={() => removeKeyword(index)}
              >
                <i class="bi bi-x"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
      <Items filteredData={filteredData} loading={loading} />
    </Fragment>
  );
};

export default App;
