export default function NavbarMain() {

    return (
        <div className='is-hidden-touch'>
            <nav className="nav nav-pm1 nav-atas ">
                <div className="right">
                    <a className="nav1 brg" href="#">About</a>
                    <a className="nav1 brg" href="#">Blog</a>
                    <a className="nav1" href="#">Cara Kerja</a>
                </div>
                <div className="left">
                    <button className="button is-size-7 mr-2 btn-main">Masuk</button>
                    <button className="button is-size-7 btn-second">Daftar</button>
                </div>
            </nav>
            <nav className="nav  nav-bawah py-1">
                <div className="satu flex is-align-items-center left">
                    <a href="" className="nav2 is-flex">
                        <img className="logo" src="../logo.png" />
                    </a>
                </div>
                <div className="pencarian nav-atas">
                    <div className="search-margin">
                        <div className="control has-icons-left search2">
                            <input className="input  in" type="text" placeholder="Cari Selada" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                    <div >
                        <div className="control has-icons-left search">
                            <input className="input  in" type="text" placeholder="Cari Selada" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-search-location"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className=" nav-atas">
                    <div className="keranjang icon-margin">
                        <div className="nav2 ">
                            <i className="fas fa-shopping-cart is-size-5 icon"></i>
                        </div>
                    </div>
                    <div className="user">
                        <a href="" className="nav2">
                            <i className="far fa-user-circle is-size-5 inline icon mr-2"></i>
                            <p className="inline icon is-size-5" >User</p>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}