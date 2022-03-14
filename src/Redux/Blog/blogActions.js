import axios from 'axios'
import {
    FETCH_BLOG_REQUEST,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOG_FAILURE
} from './blogTypes.js'

export const fetchBlog = () => {
    return (dispatch) => {
        dispatch(fetchBlogRequest())
        axios.get('https://inani-web-api.herokuapp.com/api/v1/blogs')
            .then(response => {
                // response.data is the users
                const blogs = response.data.data
                console.log(blogs)
                dispatch(fetchBlogSuccess(blogs))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchBlogFailure(error.message))
            })
    }
}

export const fetchBlogRequest = () => {
    return {
        type: FETCH_BLOG_REQUEST
    }
}

export const fetchBlogSuccess = blogs => {
    return {
        type: FETCH_BLOG_SUCCESS,
        payload: blogs
    }
}

export const fetchBlogFailure = error => {
    return {
        type: FETCH_BLOG_FAILURE,
        payload: error
    }
}