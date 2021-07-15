import { Link } from 'react-router-dom'

const WelcomePage: React.FunctionComponent = () => {
    return (
        <>
            <div className="Header">
                <div className="Header-item">
                    Tensei social auth
                </div>

                <div className="Header-item Header-item--full">
                    <Link className='Header-link' to='/dashboard'>Dashboard</Link>
                </div>
                <div className="Header-item mr-0 ">
                    <Link className='Header-link' to='/auth/login'>Login</Link>
                </div>
            </div>

            <div className="container-md mt-10">
                <div className="Subhead">
                    <div className="Subhead-heading">Tensei links</div>
                </div>
                <p><a href="https://tenseijs.com/docs">Tensei documentation</a></p>
                <p><a href="https://www.youtube.com/watch?v=yPTMrywDsCY">Introduction to Tensei - Youtube video</a></p>
                <p><a href="https://github.com/tenseijs/tensei">Discussion forum</a></p>
            </div>
        </>

    )
}

export default WelcomePage
