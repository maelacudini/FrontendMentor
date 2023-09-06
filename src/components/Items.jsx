import Item from "./Item";
import style from "../css/app.module.css";

const Items = ({ filteredData, loading }) => {
  return (
    <main className={style.items}>
      {loading ? (
        <h5>Loading...</h5>
      ) : filteredData && filteredData.length > 0 ? (
        filteredData.map((item, index) => <Item key={index} item={item} />)
      ) : (
        <p>No data available.</p>
      )}
    </main>
  );
};

export default Items;
