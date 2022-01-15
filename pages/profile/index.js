import Head from 'next/head'
import NavbarTrans from '../../components/navbarTrans'

export default function profile() {
    return (
        <div>
            <Head>
                <title>Profil</title>
            </Head>
            <NavbarTrans title="Profil" />
            <div className="wrap py-5">
                <div className="card">
                    <div className="card-content">
                        <div className="media is-flex is-align-items-center">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img className="is-rounded" src="../CTO.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content is-flex is-align-items-center is-justify-content-space-between">
                                <div>
                                    <p className="is-size-6">Pak Umar</p>
                                    <p className="is-size-7">Sobo</p>
                                </div>
                                <span className='icon'>
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5 is-flex is-justify-content-space-between'>
                    <a className='button is-large  '>
                        <span className='icon is-flex is-flex-direction-column'>
                            <i className="fas fa-shopping-bag green"></i>
                            <span className='is-size-7 pt-1 green'>Pesanan</span>
                        </span>
                    </a>
                    <a className='button is-large'>
                        <span className='icon is-flex is-flex-direction-column'>
                            <i className="fas fa-box green"></i>
                            <span className='is-size-7 pt-1 green'>Dikemas</span>
                        </span>
                    </a>
                    <a className='button is-large'>
                        <span className='icon is-flex is-flex-direction-column'>
                            <i className="fas fa-motorcycle green"></i>
                            <span className='is-size-7 pt-1 green'>Diantar</span>
                        </span>
                    </a>
                    <a className='button is-large'>
                        <span className='icon is-flex is-flex-direction-column'>
                            <i className="fas fa-box-open green"></i>
                            <span className='is-size-7 pt-1 green'>Selesai</span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}