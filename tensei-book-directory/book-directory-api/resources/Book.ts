import { belongsTo, date, integer, resource, text, textarea } from "@tensei/core";

const BookResource = resource('Book')
  .fields([
    text('Title'),
    text('Author'),
    text('ISBN').unique(),
    text('Year Published'),
    textarea('Description'),
    integer('Number of Pages')
  ])

export default BookResource;