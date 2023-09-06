import style from "../css/app.module.css";

const Item = ({ item }) => {
  return (
    <div className={`row ${style.card}`}>
      <div className={`col-md-2 ${style.logo}`}>
        <img src={item.logo} alt="logo" width={"70px"} height={"70px"} />
      </div>

      <div className={`col-md-6 ${style.header}`}>
        <small className={style.company}>{item.company}</small>
        {item.new && <small className={style.pillNew}>NEW</small>}
        {item.featured && (
          <small className={style.pillFeatured}>FEATURED</small>
        )}
        <div style={{ marginTop: "5px" }}>
          <h6 style={{ marginBottom: "5px" }}>
            <b>{item.position}</b>
          </h6>
          <small className={style.details}>{item.postedAt}</small>
          <small className={style.details}>{item.contract}</small>
          <small className={style.details}>{item.location}</small>
        </div>
      </div>

      <div className={`col-md-4 ${style.tags}`}>
        {item.languages.map((language, index) => (
          <span key={index} className={style.language}>
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Item;
