import style from "./css/app.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={style.footer}>
      <div className="row">
        <div className="col-md-4">
          <h3>Usefull links</h3>
          <ul className="p-0 list-unstyled">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Maps
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Work with us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support us
              </a>
            </li>
          </ul>

          <div className={style.social}>
            <h3>Social</h3>
            <i className={`bi bi-facebook ${style.icons}`}></i>
            <i className={`bi bi-whatsapp ${style.icons}`}></i>
            <i className={`bi bi-linkedin ${style.icons}`}></i>
            <i className={`bi bi-instagram ${style.icons}`}></i>
          </div>
        </div>
        <div className="col-md-8">
          <h3>Info</h3>
          <p>
            Via Roma 6, 33050, UD <br />
            +12 345 678 900 <br />
            IVA: 1234567890 <br />
            Some Copiright statement - 2023
          </p>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
            vel distinctio debitis dolores magnam perspiciatis esse illo quod
            ipsa iure atque ipsum voluptates saepe natus quam vero, deleniti in
            libero.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
