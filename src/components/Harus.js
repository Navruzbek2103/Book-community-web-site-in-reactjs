import CardImgOne from "./../images/harus-card-img-one.png"
import CardImgTwo from "./../images/harus-card-img-two.png"
const Harus = () => {
  return <>
    <section className="harus">
      <div className="container">
        <h2 className="harus-title">Kenapa Kita <span className="harus-title-span">Harus</span> Membaca Buku?</h2>
        <ul className="harus-list">
          <li className="harus-item">
            <h3 className="harus-item-title">“Aku rela dipenjara asalkan <strong>bersama buku</strong>, karena dengan buku <strong>aku bebas</strong>”</h3>
            <div className="harus-item-wrapper">
              <img src={CardImgOne} className="card-img-one" alt="user img" />
              <div className="harus-item-block">
                <h4 className="harus-item-block-title">Mohammad Hatta</h4>
                <p className="harus-item-block-text">Wakil Presiden Indonesia Pertama</p>
              </div>
            </div>
          </li>

          <li className="harus-item">
            <h3 className="harus-item-title">“Cuma perlu <strong>satu buku</strong> untuk jatuh cinta pada membaca, Cari Buku itu! <strong>Mari jatuh cinta!</strong></h3>
            <div className="harus-item-wrapper">
              <img src={CardImgTwo} className="card-img-two" alt="user img" />
              <div className="harus-item-block">
                <h4 className="harus-item-block-title">Najwa Shihab</h4>
                <p className="harus-item-block-text">Duta Membaca</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </>
}

export default Harus