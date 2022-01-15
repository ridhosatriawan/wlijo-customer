export default function NavbarTrans(props) {
    return (
        <div className="bs">
            <nav className=" py-3 px-5 is-flex is-align-items-center ">
                <a>
                    <i className="fas fa-chevron-circle-left white" style={{ fontSize: 35 + "px" }}></i>
                </a>
                <div className="ml-3">
                    <p className="title is-size-5 has-font-weight-medium white">{props.title}</p>
                </div>
            </nav>
        </div>
    )
}