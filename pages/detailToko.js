import NavbarToko from "../components/navbarToko";
import { Rating } from "react-simple-star-rating";
import CardProductStore from "../components/cardProductStore";
import products from '../public/product.json'
import Head from "next/head";

export default function DetailToko() {
    return (
        <div>
            <Head>
                <title>Detail Toko</title>
            </Head>
            <div className="bs">
                <NavbarToko />
            </div>
            <div className="wrap py-5">
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img className="is-rounded" src="../CTO.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="is-size-6">Pak Umar</p>
                                <p className="is-size-7">Sobo</p>
                                <Rating initialValue={4.5} size={12} readonly />
                            </div>
                            <div className="media-content has-text-centered is-hidden-mobile">
                                <p className="is-size-6">Transaksi</p>
                                <p className="">200</p>
                            </div>
                            <div className="media-content has-text-centered is-hidden-mobile">
                                <p className="is-size-6">Produk</p>
                                <p className="">32</p>
                            </div>
                        </div>
                        <hr />
                        <div className="content is-flex is-justify-content-space-around is-hidden-tablet">
                            <div className="has-text-centered"><p className="is-size-7 has-text-weight-medium">Transaksi</p>
                                <p>200</p>
                            </div>
                            <div className="has-text-centered"><p className="is-size-7 has-text-weight-medium">Produk</p>
                                <p>32</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <p className='py-4 green is-size-5 wrap has-text-weight-medium'>Produk</p>
            <div className=' pb-5 is-flex is-flex-wrap-wrap outer-card '>
                {
                    products.map((product, index) => (
                        <CardProductStore key={index} data={product} />
                    ))
                }
            </div>
        </div>
    )
}