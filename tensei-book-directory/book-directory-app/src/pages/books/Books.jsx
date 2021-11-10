import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import placeholder from '../../assets/placeholder.png';
import { useNavigate } from "react-router-dom";
import { tensei } from "../../utils/tensei";

export default function Books() {
  // const tensei = sdk();
  const [books, setBooks] = useState({});
  const [isFetching, setIsFetching] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);
  const navigate = useNavigate();
  const [perPage] = useState(6);

  useEffect(() => {
    const getBooks = async () => {
      if (isFetching === true) return;
      setIsFetching(true);
      let books = await tensei.books().findMany({
        pagination: {
          perPage: perPage
        },
      });
      setBooks(books.data);
      setHasFetched(true);
      setIsFetching(false);
    }

    if (hasFetched === false) getBooks();
  }, [hasFetched, isFetching, perPage, tensei, tensei.books])

  const getNextPage = async () => {

    let newpage = books.meta.page + 1;

    setIsFetching(true);
    let newbooks = await tensei.books().findMany({
      pagination: {
        perPage: perPage,
        page: newpage
      }
    });

    setBooks(newbooks.data);
    setIsFetching(false);
  }

  const getPrevPage = async () => {

    let newpage = books.meta.page - 1;

    setIsFetching(true);
    let newbooks = await tensei.books().findMany({
      pagination: {
        perPage: perPage,
        page: newpage
      }
    });

    setBooks(newbooks.data);
    setIsFetching(false);
  }

  const sortByAuthor = async () => {
    setIsFetching(true);
    let books = await tensei.books().findMany({
      pagination: {
        perPage: perPage
      },
      sort: { author: ":asc" }
    });
    setBooks(books.data);
    setIsFetching(false);
  }

  const sortByTitle = async () => {
    setIsFetching(true);
    let books = await tensei.books().findMany({
      pagination: {
        perPage: perPage
      },
      sort: { title: ":asc" }
    });
    setBooks(books.data);
    setIsFetching(false);
  }

  const style = {
    display: 'block',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '2.8em',
    lineHeight: '1.4em',
  }

  return (
    <div className='vh-100 vw-100 bg-light overflow-auto'>

      <div className='bg-white shadow-sm p-5 rounded text-center'>
        <div className="container">
          <h1 className='fw-light m-0'>Tensei Book Directory</h1>
        </div>
      </div>

      <div className="my-5 container">

        <div className="mb-5 d-flex justify-content-between">

          <button className="btn btn-muted"
            onClick={() => {
              navigate(-1);
            }}
          >&larr; Back</button>

          <div>
            <button className="btn btn-muted"
              onClick={sortByAuthor}
            >Sort by Author</button>
            &nbsp;|&nbsp;
            <button className="btn btn-muted"
              onClick={sortByTitle}
            >Sort by Title</button>
          </div>
        </div>

        {
          isFetching === true ?

            <div className='d-flex justify-content-center align-items-center lead'>
              Loading...
            </div>

            :
            <div>

              {
                (books?.data?.length ?? 0) === 0 ?

                  <div className='d-flex flex-column justify-content-center align-items-center'>
                    <p className='lead'>
                      No book in the directory <br /> Add your first book.
                    </p>
                    <Link to='/books/create' className='btn btn-primary'>Add a book</Link>
                  </div>

                  :

                  <div>

                    <div className='row'>
                      {
                        books.data.map((book) => (

                          <div key={book.id} className="col-lg-4 mb-3" style={{ cursor: 'pointer' }} onClick={() => {
                            navigate(`/books/${book.id}`)
                          }}>

                            <div className="bg-white rounded shadow-sm p-2 h-100 d-flex">
                              <div className="d-flex justify-content-start align-items-center">

                                <img src={placeholder} alt="Tensei Logo" width={100} className="img img-fluid" />

                                <div className="lead p-2">
                                  <p className="m-0 mb-2" style={style}>{book.title}</p>
                                  <small>by <b>{book.author}</b></small>
                                </div>

                              </div>
                            </div>

                          </div>

                        ))
                      }
                    </div>

                    <div className="mt-5 text-center" >
                      <Link to='/books/create' className='btn btn-lg btn-primary px-5'>Add book</Link>
                    </div>

                    <div className="mt-5 d-flex justify-content-between align-items-center">
                      <button className="btn btn-muted"
                        disabled={books.meta.page === 1}
                        onClick={getPrevPage}
                      >&larr;&nbsp;Prev</button>

                      <span>Page {books.meta.page} / {books.meta.pageCount}</span>

                      <button className="btn btn-muted"
                        onClick={getNextPage}
                        disabled={books.meta.page === books.meta.pageCount}
                      >Next&nbsp;&rarr;</button>
                    </div>

                  </div>
              }

            </div>
        }

      </div>



    </div>
  )
}