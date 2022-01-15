export default function NavbarToko() {
    return (
        <div>
            <nav className=" py-3 px-5 is-flex is-align-items-center is-justify-content-space-between">
                <a>
                    <i className="fas fa-chevron-circle-left white" style={{ fontSize: 35 + "px" }}></i>
                </a>
                <div className="">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Cari Di Toko Ini" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                    </p>
                </div>
                <button className="button">
                    <i className="fas green fa-search icon2"></i>
                </button>
            </nav>
        </div>
    )
}