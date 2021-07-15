import { Link } from 'react-router-dom'
import { useTensei } from '@tensei/react-auth'

const LoginPage: React.FunctionComponent = () => {
    const tensei = useTensei()

    return (
        <div className="container-sm mt-12 border p-6">
            <p className='mb-4'>
                <a href={tensei.auth().socialRedirectUrl('github')}>
                    <button className="btn btn-primary">Login with Github</button>
                </a>
            </p>
            <Link to='/'>Back home</Link>
        </div>
    )
}

export default LoginPage
