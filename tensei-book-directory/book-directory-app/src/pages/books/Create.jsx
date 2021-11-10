import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { tensei } from "../../utils/tensei";

export default function Create() {

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    yearPublished: "",
    description: "",
    numberOfPages: 0,
    author: ""
  });

  const addBook = async (e) => {
    try {
      e.preventDefault();

      await tensei.books().insert({
        object: book
      })
      navigate(-1);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }

  return (
    <div className='vh-100 vw-100 bg-light overflow-auto'>

      <div className='bg-white shadow-sm p-5 rounded text-center'>
        <div className="container">
          <h1 className='fw-light m-0'>Add a Book</h1>
        </div>
      </div>

      <div className='container my-5 w-auto'>

        <form className="mx-auto col-lg-4 col-md-7 col-11"
          onSubmit={addBook}
        >

          {error !== "" &&
            <div className="alert alert-danger mb-3">
              {error}
              
              <br />
              <button className="btn btn-danger m-0 p-0 px-3 mt-2" onClick={() => setError("")} >
                Close
              </button>
            </div>
          }

          <div className="mb-3">
            <label htmlFor="title" className="lead">Title</label>
            <input type="text" id="title" className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, title: e.target.value })
            }} />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="lead">Author</label>
            <input type="text" id="author" className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, author: e.target.value })
            }} />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="lead">Description</label>
            <textarea id="description" cols="30" rows="3" className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, description: e.target.value })
            }}></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="isbn" className="lead">ISBN</label>
            <input type="text" id="isbn" className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, isbn: e.target.value })
            }} />
          </div>

          <div className="mb-3">
            <label htmlFor="yearPublished" className="lead">Year Published</label>
            <input type="number" min="1900" max="2099" step="1" defaultValue={new Date().getFullYear().toString()} id="yearPublished" className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, yearPublished: e.target.value })
            }} />
          </div>

          <div className="mb-3">
            <label htmlFor="numberOfPages" className="lead">Number of Pages</label>
            <input type="number" id="numberOfPages" min={1} className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, numberOfPages: e.target.value })
            }} />
          </div>

          <div className="w-100 row mt-5">

            <button type="button" className="col-6 btn btn-muted"
              onClick={() => navigate(-1)}
            >
              Back
            </button>

            <button type="submit" className="col-6 btn btn-primary">
              Add
            </button>

          </div>

        </form>


      </div >

    </div >
  )
}