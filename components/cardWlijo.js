import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function CardWlijo(props) {
    return (
        <div className='card-container'>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-square">
                        <img src="../CTO.jpg" />
                    </figure>
                </div>
                <div className="card-content">
                    <Rating initialValue={props.data.rating} size={20} readonly />
                    <p className='is-size-6 is-size-7-mobile has-text-weight-medium'>{props.data.nama}</p>
                    <p className="is-size-7">Lokasi : <span>{props.data.lokasiTerkini}</span></p>
                    <p className="is-size-7">Transaksi : {props.data.transaksi}</p>
                    <button className='button mt-3 btn-card is-size-7'>Lihat</button>
                </div>
            </div>
        </div>
    )
}