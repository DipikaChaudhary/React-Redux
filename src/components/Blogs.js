import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchBlog } from '../Redux'


function Blogs({ BlogData, fetchBlog }) {
    useEffect(() => {
        fetchBlog()
    }, [])

    return BlogData.loading ?
        (
            <h2>Loading</h2>
        ) : BlogData.error ? (
            <h2>{BlogData.error}</h2>
        ) : (
            <div>
                <h2>Blog List</h2>
                <div style={{ width: '50%', margin: '0 auto' }}>
                    {BlogData &&
                        // BlogData.users &&
                        BlogData?.map(blog =>
                        (
                            <>
                                <h3>{blog?.title} </h3>
                                <img src={blog?.coverImage} alt='Blog-img' />
                                {// <p> {blog.description}</p>
                                }
                            </>
                        ))}
                </div>
            </div>
        )
}

const mapStateToProps = state => {
    return {
        BlogData: state.blog.blogs
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchBlog: () => dispatch(fetchBlog())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Blogs);
