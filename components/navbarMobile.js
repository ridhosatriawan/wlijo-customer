export default function NavbarMobile() {
    return (
        <div className="is-hidden-tablet bs">
            <nav className=" py-3 px-5 is-flex is-align-items-center is-justify-content-space-between is-hidden">
                <div className="">
                    <p className="control has-icons-left" style={{ width: 250 + "px" }}>
                        <input className="input" type="text" placeholder="Lokasi Anda" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search-location"></i>
                        </span>
                    </p>
                </div>
                <div className="is-flex is-align-items-center">
                    <button className="button small p-4 btn-second"> Cari</button>
                </div>
            </nav>
            <nav className=" py-3 px-5 is-flex is-align-items-center is-justify-content-space-between">
                <div className="is-flex is-justify-content-center is-align-items-center">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Cari Sayur" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                    </p>
                    <button className="button ml-1">
                        <span className="icon is-small">
                            <i className="fas fa-search green"></i>
                        </span>
                    </button>
                </div>
                <div className="is-flex is-align-items-center is-justify-content-center">
                    <div className="keranjang icon-margin mr-3">
                        <div className="nav2">
                            <span className="icon">
                                <i className="fas fa-shopping-cart icon2"></i>
                            </span>
                        </div>
                    </div>
                    <div className="user">
                        <a href="" className="nav2">
                            <span className="icon">
                                <i className="far fa-user-circle inline icon2"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </nav>

        </div>
    )
}