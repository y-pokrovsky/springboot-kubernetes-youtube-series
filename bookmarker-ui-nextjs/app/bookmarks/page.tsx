import type { NextPage } from 'next'
import {BookmarkResponse} from "../../services/models";
import {fetchBookmarks} from "../../services/api";
import Bookmarks from "../../components/Bookmarks"

// interface HomeProps {
//     titles: string[]
// }

const Home: NextPage = async ({searchParams, }: {searchParams: Promise<{ [key: string]: string | string[] | undefined }>;}) => {

  const {page = 1} = await searchParams

  const bookmarks: BookmarkResponse = await fetchBookmarks(parseInt(page))

  return (
    <div>
        <Bookmarks bookmarks={bookmarks} />
    </div>
  );
}

export default Home;