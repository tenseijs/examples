import { sdk } from "@tensei/sdk";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function Book() {

  const navigate = useNavigate();
  const params = useParams();
  const tensei = sdk();
  const [hasFetched, setHasFetched] = useState(false);
  const [canEdit, setCanEdit] = useState(false);
  const [error, setError] = useState("");
  const [book, setBook] = useState({
    title: "",
    isbn: "",
    yearPublished: "",
    description: "",
    numberOfPages: 0,
    author: ""
  });

  useEffect(() => {

    const getBook = async () => {
      const book = await tensei.books().find({
        id: params.id
      });
      setBook(book.data.data);
      setHasFetched(true);
    }

    if (hasFetched === false) getBook();
  })

  const updateBook = async (e) => {
    try {
      e.preventDefault();

      await tensei.books().update({
        id: book.id,
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

      <div className='bg-white shadow-sm p-4 rounded text-center'>
        <div className="container">
          <h1 className='fw-light m-0'>Book</h1>
          <h3 className='fw-light m-0 mt-2'>{book.title}</h3>
        </div>
      </div>

      <div className='container my-5 w-auto'>

        <div className="d-flex justify-content-between">

          <button className="btn btn-muted"
            onClick={() => {
              navigate(-1);
            }}
          >&larr; Back</button>

          <div>
            <button className="btn btn-muted"
              onClick={() => {
                setCanEdit(true);
              }}
            >Edit</button>

            <button className="btn btn-muted text-danger"
              onClick={async () => {
                // eslint-disable-next-line no-restricted-globals
                if (confirm(`Are you sure you want to delete ${book.title}?`) === true) {
                  await tensei.books().delete({
                    id: book.id
                  });
                  navigate(-1);
                }
              }}
            >Delete</button>
          </div>

        </div>

        <form className="mx-auto col-lg-4 col-md-7 col-11"
          onSubmit={updateBook}
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
            <input type="text" readOnly={!canEdit} defaultValue={book.title} id="title" className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, title: e.target.value })
            }} />
          </div>

          <div className="mb-3">
            <label htmlFor="author" className="lead">Author</label>
            <input type="text" readOnly={!canEdit} defaultValue={book.author} id="author" className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, author: e.target.value })
            }} />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="lead">Description</label>
            <textarea id="description" readOnly={!canEdit} defaultValue={book.description} cols="30" rows="3" className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, description: e.target.value })
            }}></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="isbn" className="lead">ISBN</label>
            <input type="text" id="isbn" readOnly={true} defaultValue={book.isbn} className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, isbn: e.target.value })
            }} />
          </div>

          <div className="mb-3">
            <label htmlFor="yearPublished" className="lead">Year Published</label>
            <input type="number" min="1900" max="2099" step="1" readOnly={!canEdit} defaultValue={book?.yearPublished} id="yearPublished" className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, yearPublished: e.target.value })
            }} />
          </div>

          <div className="mb-3">
            <label htmlFor="numberOfPages" className="lead">Number of Pages</label>
            <input type="number" id="numberOfPages" min={1} readOnly={!canEdit} value={book.numberOfPages} className="form-control mt-1" onChange={(e) => {
              setBook({ ...book, numberOfPages: e.target.value })
            }} />
          </div>

          {
            canEdit &&
            <div className="w-100 row mt-5">

              <button type="button" className="col-6 btn btn-muted"
                onClick={() => setCanEdit(false)}
              >
                Cancel
              </button>

              <button type="submit" className="col-6 btn btn-primary">
                Update
              </button>

            </div>
          }


        </form>


      </div>

    </div>
  )
}