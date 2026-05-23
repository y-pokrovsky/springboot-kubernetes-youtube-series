import type { NextPage } from 'next'
import {BookmarkResponse} from "../../services/models";
import {fetchBookmarks} from "../../services/api";
import Bookmarks from "../../components/Bookmarks"
import SearchForm from "../../components/SearchForm"

// interface HomeProps {
//     titles: string[]
// }

const Home = async ({searchParams, }: {searchParams: Promise<{ [key: string]: string | undefined }>;}) => {

  const {page = 1, query = ""} = await searchParams

  const bookmarks: BookmarkResponse = await fetchBookmarks(parseInt(String(page)), String(query))

  return (
    <div>
        <SearchForm />
        <Bookmarks bookmarks={bookmarks} query={query} />
    </div>
  );
}

export default Home;