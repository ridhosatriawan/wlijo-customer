export default function CardProduct(props) {
    return (
        <div className='card-container'>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-square">
                        <img src="../tomat.jpg" />
                    </figure>
                    <div className='image-ttl p-1 has-text-centered is-size-7 has-text-weight-medium'>{props.data.namaToko}</div>
                </div>
                <div className="card-content">
                    <p className='is-size-6 has-text-weight-medium'>{props.data.namaProduk}</p>
                    <p className="is-size-7">Rp.{props.data.harga}</p>
                    <p className="is-size-7">Stok : {props.data.stok}</p>
                    <button className='button mt-3 btn-card is-size-7'>Beli</button>
                </div>
            </div>

        </div>
    )
}