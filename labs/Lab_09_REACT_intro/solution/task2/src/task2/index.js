import React, { useState } from 'react';

const Post = ({ username, text, likes, onLike }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{username}</h3>
      <p>{text}</p>
      <button onClick={onLike}>Like ({likes})</button>
    </div>
  );
};

const UserPosts = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: 'User1', text: 'Hello, this is my first post!', likes: 0 },
    { id: 2, username: 'User2', text: 'Just another day...', likes: 0 },
  ]);

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div style={{
      width: "20%",
    }}>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          text={post.text}
          likes={post.likes}
          onLike={() => handleLike(post.id)}
        />
      ))}
    </div>
  );
};

export default UserPosts;
