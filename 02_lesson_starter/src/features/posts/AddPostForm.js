import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'


const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onAuthorChange  = e => setUserId(e.target.value)

    const onSavePost = () => {
      console.log(title, content)
        if (title && content) {
          console.log(title, content)
            dispatch(
                postAdded(title, content, userId)
            )

            setTitle('')
            setContent('')
        }
    }

    const userOptions = users.map(user => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)
    console.log(canSave);

  return (
    <section>
      <h2>Add a New Post</h2>
      <form >
        {/* Post Title */}
        <label htmlFor="postTitle">Post Title:</label>
        <input
            type="text"
            id='postTitle'
            name='postTitle'
            value={title}
            onChange={onTitleChange}
        />
        {/* Author dropdown */}
        <label htmlFor="postAuthor">Author: </label>
        <select id="postAuthor" value={userId} onChange={onAuthorChange}>
          {userOptions}
        </select>
        {/* Content Text Area */}
        <label htmlFor="postContent">Content:</label>
        <textarea
            name="postContent"
            id="postContent"
            value={content}
            onChange={onContentChange}
        />
        <button type='button' disabled={!canSave} onClick={onSavePost} >Save Post</button>

      </form>
    </section>
  )
}

export default AddPostForm
