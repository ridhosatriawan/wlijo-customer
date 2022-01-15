import Head from 'next/head'
export default function Login() {
    return (
        <div className="is-flex is-justify-content-center is-align-items-center wrapper-auth is-flex-direction-column">
            <Head>
                <title>Login</title>
            </Head>
            <div>
                <div className="is-flex is-justify-content-center">
                    <figure className="image is-96x96">
                        <img src="../logo.png" />
                    </figure>
                </div>
                <form className="box">
                    <h1 className="title is-size-4 has-text-weight-bold green">Login</h1>
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" placeholder="e.g. alex@example.com" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label ">Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="********" />
                        </div>
                    </div>

                    <button className="button btn-main">Login</button>

                    <hr />
                    <div className="is-flex is-justify-content-space-between">
                        <a className="is-size-7 has-text-weight-medium green">Lupa Pasword ?</a>
                        <a className="is-size-7 has-text-weight-medium green">Daftar</a>
                    </div>
                </form>
            </div>
        </div>
    )
}