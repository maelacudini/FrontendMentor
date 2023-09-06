import "./css/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import style from "./css/app.module.css";
import Items from "./components/Items";
import { Fragment, useState } from "react";
import header from "/bg-header-desktop.svg";
import logo1 from "/photosnap.svg";
import logo2 from "/manage.svg";
import logo3 from "/account.svg";
import logo4 from "/myhome.svg";
import logo5 from "/loop-studios.svg";
import logo6 from "/faceit.svg";
import logo7 from "/shortly.svg";
import logo8 from "/insure.svg";
import logo9 from "/eyecam-co.svg";
import logo10 from "/the-air-filter-company.svg";

const App = () => {
  const jsonData = {
    data: [
      {
        id: 1,
        company: "Photosnap",
        logo: logo1,
        new: true,
        featured: true,
        position: "Senior Frontend Developer",
        role: "Frontend",
        level: "Senior",
        postedAt: "1d ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
        tools: [],
      },
      {
        id: 2,
        company: "Manage",
        logo: logo2,
        new: true,
        featured: true,
        position: "Fullstack Developer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "1d ago",
        contract: "Part Time",
        location: "Remote",
        languages: ["Fullstack", "Midweight", "Python", "React"],
        tools: ["React"],
      },
      {
        id: 3,
        company: "Account",
        logo: logo3,
        new: true,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2d ago",
        contract: "Part Time",
        location: "USA Only",
        languages: ["JavaScript"],
        tools: ["Frontend", "Junior", "React", "Sass", "Javascript"],
      },
      {
        id: 4,
        company: "MyHome",
        logo: logo4,
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "5d ago",
        contract: "Contract",
        location: "USA Only",
        languages: ["Frontend", "Junior", "CSS", "JavaScript"],
        tools: [],
      },
      {
        id: 5,
        company: "Loop Studios",
        logo: logo5,
        new: false,
        featured: false,
        position: "Software Engineer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "1w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["JavaScript"],
        tools: ["Fullstack", "Midweight", "Javscript", "Ruby", "Sass"],
      },
      {
        id: 6,
        company: "FaceIt",
        logo: logo6,
        new: false,
        featured: false,
        position: "Junior Backend Developer",
        role: "Backend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "UK Only",
        languages: ["Ruby"],
        tools: ["Backend", "Junior", "Ruby", "RoR"],
      },
      {
        id: 7,
        company: "Shortly",
        logo: logo7,
        new: false,
        featured: false,
        position: "Junior Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["HTML", "JavaScript"],
        tools: ["Frontend", "Junior", "Vue", "Javascript", "Sass"],
      },
      {
        id: 8,
        company: "Insure",
        logo: logo8,
        new: false,
        featured: false,
        position: "Junior Frontend Developer",
        role: "Frontend",
        level: "Junior",
        postedAt: "2w ago",
        contract: "Full Time",
        location: "USA Only",
        languages: ["JavaScript"],
        tools: ["Vue", "Sass"],
      },
      {
        id: 9,
        company: "Eyecam Co.",
        logo: logo9,
        new: false,
        featured: false,
        position: "Full Stack Engineer",
        role: "Fullstack",
        level: "Midweight",
        postedAt: "3w ago",
        contract: "Full Time",
        location: "Worldwide",
        languages: ["JavaScript", "Python"],
        tools: ["Fullstack", "Midweight", "Javascript", "Django", "Python"],
      },
      {
        id: 10,
        company: "The Air Filter Company",
        logo: logo10,
        new: false,
        featured: false,
        position: "Front-end Dev",
        role: "Frontend",
        level: "Junior",
        postedAt: "1mo ago",
        contract: "Part Time",
        location: "Worldwide",
        languages: ["JavaScript"],
        tools: ["Frontend", "Junior", "React", "Sass", "JavaScript"],
      },
    ],
  };

  const [filteredData, setFilteredData] = useState(jsonData.data);
  const [query, setQuery] = useState("");
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  function filterData(query) {
    if (query && query.trim().length > 0) {
      const keywords = query.toLowerCase().split(" ");

      const filtered = jsonData.data.filter((item) => {
        return keywords.every((keyword) => {
          return item.languages.some((language) =>
            language.toLowerCase().includes(keyword)
          );
        });
      });

      setFilteredData(filtered);
      setSelectedKeywords(keywords);
    } else {
      setFilteredData(jsonData.data);
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
        <div className={style.tags}>
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
                <i className="bi bi-x"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
      <Items filteredData={filteredData} />
    </Fragment>
  );
};

export default App;
