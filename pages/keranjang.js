import Head from 'next/head';
import NavbarTrans from '../components/navbarTrans';

export default function keranjang() {
    return (
        <div>
            <Head>
                <title>Keranjang</title>
            </Head>
            <NavbarTrans title="Keranjang" />
            <div className="outer-card-2 mt-5">
                <div className="card checkout">
                    <header className="card-header">
                        <label className="checkbox card-header-icon">
                            <input type="checkbox" />
                        </label>
                        <p className="card-header-title">
                            Pak Umar
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content checkout">

                            <div className="media is-align-items-center">
                                <label className="checkbox mr-1">
                                    <input type="checkbox" />
                                </label>
                                <div className="media-left">
                                    <figure className="image is-48x48 checkout">
                                        <img src="../tomat.jpg" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content is-flex is-align-items-center is-justify-content-space-between">
                                    <div>
                                        <p className="is-size-7-mobile has-text-weight-bold">Pakcoy</p>
                                        <p className="is-size-7">Rp 5000</p>
                                        <div className='is-flex is-size-7-mobile'>
                                            <div className='inc is-size-7'>-</div>
                                            <div className='inc is-size-7' style={{ width: 30 + 'px' }}>1</div>
                                            <div className='inc is-size-7'>+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media is-align-items-center">
                                <label className="checkbox mr-1">
                                    <input type="checkbox" />
                                </label>
                                <div className="media-left">
                                    <figure className="image is-48x48 checkout">
                                        <img src="../tomat.jpg" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content is-flex is-align-items-center is-justify-content-space-between">
                                    <div>
                                        <p className="is-size-7-mobile has-text-weight-bold">Pakcoy</p>
                                        <p className="is-size-7">Rp 5000</p>
                                        <div className='is-flex is-size-7-mobile'>
                                            <div className='inc is-size-7'>-</div>
                                            <div className='inc is-size-7' style={{ width: 30 + 'px' }}>1</div>
                                            <div className='inc is-size-7'>+</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media is-align-items-center">
                                <label className="checkbox mr-1">
                                    <input type="checkbox" />
                                </label>
                                <div className="media-left">
                                    <figure className="image is-48x48 checkout">
                                        <img src="../tomat.jpg" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content is-flex is-align-items-center is-justify-content-space-between">
                                    <div>
                                        <p className="is-size-7-mobile has-text-weight-bold">Pakcoy</p>
                                        <p className="is-size-7">Rp 5000</p>
                                        <div className='is-flex is-size-7-mobile'>
                                            <div className='inc is-size-7'>-</div>
                                            <div className='inc is-size-7' style={{ width: 30 + 'px' }}>1</div>
                                            <div className='inc is-size-7'>+</div>
                                        </div>
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
    )
}