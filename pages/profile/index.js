import Head from 'next/head';
import NavbarTrans from '../../components/navbarTrans';
import { useState } from 'react'

function first() {
    return (
        <div className='mt-5'>
            <div className="card mb-3">
                <div className="card-content">
                    <div className="content is-flex is-justify-content-space-between is-align-items-center">
                        <div className='is-size-6 has-text-weight-bold'>Pak Komar</div>
                        <button className='button bg-green white is-small'>Detail</button>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-content">
                    <div className="content is-flex is-justify-content-space-between is-align-items-center">
                        <div className='is-size-6 has-text-weight-bold'>Pak Komar</div>
                        <button className='button bg-green white is-small'>Detail</button>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-content">
                    <div className="content is-flex is-justify-content-space-between is-align-items-center">
                        <div className='is-size-6 has-text-weight-bold'>Pak Komar</div>
                        <button className='button bg-green white is-small'>Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function second() {
    return (
        <div className='mt-5'>
            <div className="card mb-3">
                <div className="card-content">
                    <div className="content is-flex is-justify-content-space-between is-align-items-center">
                        <div className='is-size-6 has-text-weight-bold'>Pak Komar</div>
                        <button className='button bg-green white is-small'>Detail</button>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-content">
                    <div className="content is-flex is-justify-content-space-between is-align-items-center">
                        <div className='is-size-6 has-text-weight-bold'>Pak Komar</div>
                        <button className='button bg-green white is-small'>Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
function third() {
    return (
        <div className='mt-5'>
            <div className="card mb-3">
                <div className="card-content">
                    <div className="content is-flex is-justify-content-space-between is-align-items-center">
                        <div className='is-size-6 has-text-weight-bold'>Pak Komar</div>
                        <button className='button bg-green white is-small'>Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function profile() {
    const [tab, setTabs] = useState({ first: "is-active", second: "", third: "" });
    const [konten, setKonten] = useState(first);

    function handleTab(nama, e) {
        e.preventDefault();
        setTabs({
            first: "", second: "", third: ""
        });

        setTabs({
            tab,
            [nama]: "is-active"
        });

        setKonten("")

        if (nama === "first") {
            setKonten(first);
        } else if (nama === "second") {
            setKonten(second);
        } else {
            setKonten(third);
        }
    }

    return (
        <div>
            <Head>
                <title>Profil</title>
            </Head>
            <NavbarTrans title="Profil" />
            <div className="wrap py-5">
                <div className='bg-green is-flex is-align-items-center is-justify-content-center py-3 is-flex-direction-column'>
                    <figure className="image is-128x128">
                        <img className='is-rounded ' src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                    <div className='is-size-4 has-text-weight-bold white mt-2'>Ridho Satriawan</div>
                    <div className='mt-2'>
                        <button className='button is-small green has-text-weight-medium'>Edit Profil</button>
                        <button className='button is-small red has-text-weight-medium ml-2'>Logout</button>
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="card">
                        <div className="card-content is-flex is-align-items-center is-justify-content-space-between">
                            <div>
                                <p className="is-size-6 has-text-weight-medium">
                                    <span className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </span>
                                    <span>
                                        Alamat
                                    </span>
                                </p>
                                <p className="is-size-7-mobile">
                                    Ryan Hadi Prasetya | 0895236350155
                                </p>
                                <p className="is-size-7-mobile">
                                    Jl. Jembrana RT/RW 003/001 Kel.Klatak Kec.Kalipuro Kab.Banyuwangi - Kalipuro, Jawa Timur, ID 68458
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <div className="tabs is-centered is-boxed">
                        <ul>
                            <li className={tab.first}>
                                <a onClick={handleTab.bind(this, "first")}>
                                    <span className="icon is-small"><i className="fas fa-shopping-bag" aria-hidden="true"></i></span>
                                    <span>Pesanan</span>
                                </a>
                            </li>
                            <li className={tab.second}>
                                <a onClick={handleTab.bind(this, "second")}>
                                    <span className="icon is-small"><i className="fas fa-motorcycle" aria-hidden="true"></i></span>
                                    <span>Diantar</span>
                                </a>
                            </li>
                            <li className={tab.third} >
                                <a onClick={handleTab.bind(this, "third")}>
                                    <span className="icon is-small"><i className="fas fa-box-open" aria-hidden="true"></i></span>
                                    <span>Selesai</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    konten
                }
            </div>
        </div>
    )
}