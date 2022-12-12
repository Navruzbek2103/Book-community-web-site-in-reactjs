import btnLoupeIcon from "./../images/btn-loupe-icon.svg"
import btnDonateIcon from "./../images/btn-donate-icon.svg"
import largeImg from "./../images/hero-img.png"

export const Intro = () => {
  return <>
    <section className="intro">
      <div className="container">
        <div className="intro-wrapper">
          <p className="intro-text"><span className="intro-text-span">Pojok Baca</span> Probolinggo</p>
          <h2 className="intro-title">Pinjam Buku Secara <span className="intro-title-span">Gratis</span> untuk Masyarakat</h2>
          <div className="intro-btn-group">
            <button className="intro-btn btn-active">
              Cari Judul Buku
              <img src={btnLoupeIcon} className="intro-btn-img" alt="btn img loupe"/>
            </button>
            <button className="intro-btn">
              Donasi dengan Kami
              <img src={btnDonateIcon} className="intro-btn-img" alt="btn img donate"/>
            </button>
          </div>
          <img src={largeImg} className="intro-img" alt="hero img"/>
        </div>
      </div>
    </section>
  </>
}