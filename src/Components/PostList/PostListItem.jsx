import React, { Component } from 'react';

class PostListItem extends Component{

    shouldComponentUpdate(nextProps) {
        return(
            this.props.show.title !== nextProps.show.title ||
            this.props.show.body !== nextProps.show.body 
        );
    }
    
    render(){
        const {title, body} = this.props.show;
        return(
            <div>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        );
    }

}

export default PostListItem;