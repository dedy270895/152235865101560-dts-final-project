import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array   
    }
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments
        }
    }
    handleDelete(index) {
        const { comments } = this.state
        comments.splice(index,1);
        this.setState({
            comments
        });
        localStorage.setItem('comments', JSON.stringify(this.state.comments));
    }
    render() {
        const { comments } = this.state;
        return (
            <div>
                { 
                    comments.map((comment, index) => {
                        return <Comment comment={ comment } key={ index } index= { index } onDelete={ this.handleDelete.bind(this) }/>
                    })
                }
            </div>
        )
    }
    
}
