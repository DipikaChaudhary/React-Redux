import {
    FETCH_BLOG_REQUEST,
    FETCH_BLOG_SUCCESS,
    FETCH_BLOG_FAILURE
} from './blogTypes'

const initialState = {
    loading: false,
    blogs: [],
    error: ''
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BLOG_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_BLOG_SUCCESS:
            return {
                loading: false,
                blogs: action.payload,
                error: ''
            }
        case FETCH_BLOG_FAILURE:
            return {
                loading: false,
                blogs: [],
                error: action.payload
            }
        default: return state
    }
}

export default blogReducer