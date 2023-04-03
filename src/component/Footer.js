import "./FooterStyles.css"

const Footer = () =>{
  return(
    <div className="footer">
      <div className="top">
        <div>
          <h1>LOGO</h1>
          <p>Searching for your favorite design</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-solid fa-square-envelope"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">link1</a>
          <a href="/">link2</a>
          <a href="/">link3</a>
          <a href="/">link4</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">link1</a>
          <a href="/">link2</a>
          <a href="/">link3</a>
          <a href="/">link4</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">link1</a>
          <a href="/">link2</a>
          <a href="/">link3</a>
          <a href="/">link4</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">link1</a>
          <a href="/">link2</a>
          <a href="/">link3</a>
          <a href="/">link4</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;