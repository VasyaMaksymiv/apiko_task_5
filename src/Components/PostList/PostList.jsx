import React from 'react';
import PostListItem from './PostListItem'

const PostList=(props)=>{
    if(props.loader){
        return (
            <div className='no_post' >
                <h3>n</h3>
            </div>  
        );
    }

    if(props.postShow.length === 0) {
        return (
            <div className='load'>
                <h3>Loading...</h3>
            </div>
        );
    } else {
        return (
            <div className='postList' >
                {props.postShow.map((item) => <PostListItem key={item.id} show={item} />)}
            </div>
        );
    }
}

export default PostList;