import React from 'react'


function PostHeader() {
    return (
        <div className='post-header'>
            <img src={ process.env.PUBLIC_URL + '/defaultImg.jpg' } alt='The default. You should change this'/>
            <div className='name-and-tag'>
                <h5 style={ { marginBottom: 0 } } ><b>cool_guy_jas</b></h5>
                <p>@cool_guy_jas</p>
            </div>
            
        </div>
    )
}

export default PostHeader;
