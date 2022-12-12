import headerLogoImg from "./../images/site-logo.svg"

const Header = () =>{
  return (
    <>
      <header>
        <div className="container">
          <nav className="nav">
            <a href="./../../public/index.html" className="nav-link-logo">
              <img src={headerLogoImg} className="nav-link-img" alt="site logo"/>
            </a>
            <div className="wrapper-menu">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="./../../public/index.html" className="nav-link">Beranda</a>
                </li>
                <li className="nav-item">
                  <a href="./../../public/index.html" className="nav-link">Koleksi</a>
                </li>
                <li className="nav-item">
                  <a href="./../../public/index.html" className="nav-link">Syarat dan Ketentuan</a>
                </li>
                <li className="nav-item">
                  <a href="./../../public/index.html" className="nav-link">Kontak</a>
                </li>
              </ul>
              <button className="menu-btn">Masuk</button>
            </div>
          </nav>
        </div>
      </header>
    </>)
}

export default Header;