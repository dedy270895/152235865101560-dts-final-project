import React from 'react';

export default (props) => {
    const { comment, index, onDelete } = props;
    const timeString = (time) => {
        const duration = (+new Date()-time) / 1000
        return duration > 60
        ? `${Math.round(duration / 60)} minutes ago`
        : `${Math.round(Math.max(duration, 1))} Seconds ago`
    }
    const getSafeContent = (content) => {
        return content
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;")
                .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }
    return (
        <div className='comment'>
            <div className='comment-username'>
                <span>{ comment.userName }：</span>
            </div>
            <p dangerouslySetInnerHTML={{
                __html: getSafeContent(comment.content)
            }}></p>
            <em className="comment-createdtime" style={{'textAlign':'right'}}>{ timeString(comment.createTime) }</em>
            <span className="comment-delete" onClick={ () => { onDelete(index) } }>Delete</span>
        </div>
    )
}

