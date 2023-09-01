import { useState } from "react";
import useFetch from "../hooks/Fetch";
import Countries from "./Countries";

const Home = ({ mode }) => {
  //fetch data
  const apiFields =
    "https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,languages,subregion,currencies";

  const { data, loading, error } = useFetch(apiFields);

  //set regions to filter by
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  //set states
  const [filteredData, setFilteredData] = useState(data);
  const [selectedRegion, setSelectedRegion] = useState("All");

  // Filter by both query and region if a region is selected
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = data.filter(
      (country) =>
        country.name.common.toLowerCase().includes(query) &&
        (selectedRegion === "All" ||
          country.region.toLowerCase().includes(selectedRegion.toLowerCase()))
    );
    setFilteredData(filtered);
  };

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
  };

  //handle loading and error
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <main>
      <div className="d-flex justify-content-between align-items-start mt-3">
        <input
          className="form-control me-3"
          type="text"
          placeholder="Search for a country"
          onChange={handleSearch}
        />

        <div className="dropdown">
          <button
            className={
              mode === "light"
                ? "btn btn-dark dropdown-toggle"
                : "btn btn-light dropdown-toggle"
            }
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedRegion === "All" ? "Filter by region" : selectedRegion}
          </button>
          <ul className="dropdown-menu">
            {regions.map((region) => (
              <li key={region}>
                <button
                  className={`dropdown-item ${
                    selectedRegion === region ? "active" : ""
                  }`}
                  onClick={() => handleRegionChange(region)}
                >
                  {region}
                </button>
              </li>
            ))}
            <li>
              <button
                className="dropdown-item"
                onClick={() => handleRegionChange("All")}
              >
                All
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <Countries mode={mode} filteredData={filteredData} data={data} />
      </div>
    </main>
  );
};

export default Home;
