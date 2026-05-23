import React from "react";
import Bookmark from "./Bookmark";
import Pagination from "./Pagination";

interface BookmarksProps {
    bookmarks: BookmarkResponse,
    query?: string
}

const Bookmarks: React.FC<BookmarksProps> = ({bookmarks, query}) => (
      <div>
      <Pagination bookmarks={bookmarks} query={query} />
        {bookmarks.data.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)}
      </div>
);

export default Bookmarks;