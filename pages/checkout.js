import NavbarTrans from "../components/navbarTrans";
import Head from 'next/head'

export default function Checkout() {
    return (
        <div>
            <Head>
                <title>Checkout</title>
            </Head>
            <NavbarTrans title="Checkout" />
            <div className="outer-card mt-5">
                <div className="card">
                    <div className="card-content is-flex is-align-items-center is-justify-content-space-between">
                        <div>
                            <p className="is-size-6 has-text-weight-medium">
                                <span className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <span>
                                    Alamat Pengiriman
                                </span>
                            </p>
                            <p className="is-size-7-mobile">
                                Ryan Hadi Prasetya | 0895236350155
                            </p>
                            <p className="is-size-7-mobile">
                                Jl. Jembrana RT/RW 003/001 Kel.Klatak Kec.Kalipuro Kab.Banyuwangi - Kalipuro, Jawa Timur, ID 68458
                            </p>
                        </div>
                        <div>
                            <span className="icon">
                                <i className="fas fa-chevron-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="outer-card-2 mt-5">
                <div className="card checkout">
                    <header className="card-header">
                        <p className="card-header-title">
                            Pak Umar
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content checkout">

                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-32x32 checkout">
                                        <img src="../tomat.jpg" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content is-flex is-align-items-center is-justify-content-space-between">
                                    <div>
                                        <p className="is-size-7-mobile has-text-weight-bold">Pakcoy</p>
                                        <p className="is-size-7">Rp 5000</p>
                                    </div>
                                    <div>
                                        <p className="is-size-7-mobile">x 1</p>
                                    </div>
                                </div>
                            </div>

                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-32x32 checkout">
                                        <img src="../tomat.jpg" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content is-flex is-align-items-center is-justify-content-space-between">
                                    <div>
                                        <p className="is-size-7-mobile has-text-weight-bold">Pakcoy</p>
                                        <p className="is-size-7">Rp 5000</p>
                                    </div>
                                    <div>
                                        <p className="is-size-7-mobile">x 1</p>
                                    </div>
                                </div>
                            </div>

                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-32x32 checkout">
                                        <img src="../tomat.jpg" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content is-flex is-align-items-center is-justify-content-space-between">
                                    <div>
                                        <p className="is-size-7-mobile has-text-weight-bold">Pakcoy</p>
                                        <p className="is-size-7">Rp 5000</p>
                                    </div>
                                    <div>
                                        <p className="is-size-7-mobile">x 1</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <div className="card-footer-item is-justify-content-space-between">
                            <p className="is-size-7-mobile">Total Pesanan (3 produk) :</p>
                            <p className="is-size-6-mobile has-text-weight-bold green" >30.000</p>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="btm-action bg-green py-3 px-5 is-flex is-justify-content-space-between">
                <div className="is-flex is-flex-direction-column">
                    <p className="is-size-7-mobile white">Total Pembayaran :</p>
                    <p className="is-size-7-mobile has-text-weight-bold white">Rp. 100.000</p>
                </div>
                <button className="button btn-second is-size-7-mobile">
                    Buat Pesanan
                </button>
            </div>
        </div>
    );
}
