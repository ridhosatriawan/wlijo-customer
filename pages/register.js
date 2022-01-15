import Head from "next/head"

export default function Register() {
    return (
        <div className="is-flex is-justify-content-center is-align-items-center wrapper-auth is-flex-direction-column">
            <Head>
                <title>Daftar</title>
            </Head>
            <div>
                <div className="is-flex is-justify-content-center">
                    <figure className="image is-96x96">
                        <img src="../logo.png" />
                    </figure>
                </div>
                <form className="box">
                    <h1 className="title is-size-4 has-text-weight-bold green">Daftar</h1>
                    <div className="field">
                        <label className="label is-size-6">Nama Lengkap</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="Nama Lengkap" />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label is-size-6">Email</label>
                        <div className="control">
                            <input className="input" type="email" placeholder="Email" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label is-size-6">Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="Password" />
                        </div>
                    </div>

                    <button className="button btn-main is-size-6">Daftar</button>

                    <hr />
                    <div className="is-flex">
                        <p className="is-size-7 has-text-weight-medium mr-1">Sudah Daftar?</p>
                        <a className="is-size-7 has-text-weight-medium green">Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
}