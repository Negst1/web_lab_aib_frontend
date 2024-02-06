import React, { useState } from 'react';
import './styles.css'; // Подключаем файл стилей

const Post = ({ id, username, text, likes, tags, onLike, onDelete, filterByTag }) => {
  return (
    <div className="post" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{username}</h3>
      <p>{text}</p>
      <div>
        {tags.map((tag, index) => (
          <button key={index} onClick={() => filterByTag(tag)} style={{ marginRight: '5px' }}>
            {tag}
          </button>
        ))}
      </div>
      <button onClick={onLike}>Like ({likes})</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

const UserPosts = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: 'User1', text: 'Hello, this is my first post!', likes: 0, tags: ['tag1', 'tag2'] },
    { id: 2, username: 'User2', text: 'Just another day...', likes: 0, tags: ['tag1', 'tag3'] },
    // Add more posts here
  ]);

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [uniqueTags, setUniqueTags] = useState([...new Set(posts.flatMap(post => post.tags))]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [newPost, setNewPost] = useState({
    username: '',
    text: '',
    tags: '',
  });

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
  };

  const handleDelete = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
    updateUniqueTags(updatedPosts);
  };

  const updateUniqueTags = (posts) => {
    const tags = [...new Set(posts.flatMap(post => post.tags))];
    setUniqueTags(tags);
  };

  const filterByTag = (tag) => {
    if (selectedTags.includes(tag)) {
      const filtered = posts.filter((post) => !post.tags.includes(tag) || !selectedTags.includes(tag));
      setFilteredPosts(filtered);
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      const filtered = posts.filter((post) => post.tags.includes(tag));
      setFilteredPosts(filtered);
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleAddPost = () => {
    const tagsArray = newPost.tags.split(',').map(tag => tag.trim());
    const id = posts.length + 1;
    const updatedPosts = [
      ...posts,
      {
        id,
        username: newPost.username,
        text: newPost.text,
        likes: 0,
        tags: tagsArray,
      },
    ];
    setPosts(updatedPosts);
    setFilteredPosts(updatedPosts);
    setNewPost({
      username: '',
      text: '',
      tags: '',
    });
    updateUniqueTags(updatedPosts);
  };

  return (
    <div className="container">
      <div className="add-post">
        <input
          type="text"
          placeholder="Username"
          value={newPost.username}
          onChange={(e) => setNewPost({ ...newPost, username: e.target.value })}
        />
        <input
          type="text"
          placeholder="Post Text"
          value={newPost.text}
          onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={newPost.tags}
          onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div className="posts">
        {filteredPosts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            text={post.text}
            likes={post.likes}
            tags={post.tags}
            onLike={() => handleLike(post.id)}
            onDelete={handleDelete}
            filterByTag={filterByTag}
          />
        ))}
      </div>
      <div className="tags">
        {uniqueTags.map((tag, index) => (
          <button key={index} onClick={() => filterByTag(tag)}>
            {selectedTags.includes(tag) ? <b>{tag}</b> : tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserPosts;
