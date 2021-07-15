import { Link } from 'react-router-dom'
import { useAuth, useTensei } from '@tensei/react-auth'

const DashboardPage: React.FunctionComponent = () => {
    const { user } = useAuth()
    const tensei = useTensei()

    return (
        <>
            <div className="Header">
                <div className="Header-item">
                    Tensei social auth
                </div>

                <div className="Header-item Header-item--full">
                    <Link className='Header-link' to='/'>Home</Link>
                </div>
                <div className="Header-item mr-0 ">
                    <button className="btn" onClick={() => tensei.auth().logout()}>Logout</button>
                </div>
            </div>

            <div className="container-md mt-10">
                <div className="Subhead">
                    <div className="Subhead-heading">Hey {user?.email}, Welcome !</div>
                </div>
            </div>
        </>

    )
}

export default DashboardPage
