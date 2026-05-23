import axios from "axios"
import {BookmarkResponse} from "./models";

const getApiUrl = () => {
    return process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL
}

export const fetchBookmarks = async (page: number, query: string): Promise<BookmarkResponse> => {
    let url = `${getApiUrl()}/api/bookmarks?page=${page}`
    if (query) {
        url += `&query=${query}`
    }
    const res = await axios.get<BookmarkResponse>(url)
    return res.data
}

export const saveBookmark = async (bookmark: {title: string, url: string}) => {

    const res = await axios.post(`${getApiUrl()}/api/bookmarks`, bookmark)
    return res.data
}