import React, { useState, useEffect } from 'react';
import PaginationButtonList from './PaginationButtonList';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=5`
      );
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    };

    fetchData();
  }, [currentPage]);

  if (loading) {
    return (
      <div id="loader">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <PaginationButtonList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PostList;
