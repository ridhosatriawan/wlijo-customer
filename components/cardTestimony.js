export default function CardTestimony(props) {
    return (
        <div className="card testimoni">
            <div className="card-content">
                <div className="media mb-2 is-align-items-center">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src="../CTO.jpg" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-6">{props.data.nama} </p>
                        <p className="subtitle is-7">{props.data.role}</p>
                    </div>
                </div>

                <div className="content is-size-7">
                    {props.data.testi}
                </div>
            </div>
        </div>
    )
}