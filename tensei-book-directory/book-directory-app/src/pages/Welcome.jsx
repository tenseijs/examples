import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className='vh-100 vw-100 d-flex justify-content-center align-items-center bg-light'>

      <div className="d-flex flex-column align-items-end">
        <h1 className='fw-bold text-secondary'>Welcome to <br /> Tensei Book Directory</h1>
        <br />
        <Link to='/books' className='btn btn-primary w-auto'>
          This way please &rarr;
        </Link>
      </div>

    </div>
  )
}