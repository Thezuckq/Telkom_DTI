/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from "react";
import app from "../../services/firebase";
import Posts from "./posts";
import Pagination from "./pagination";
import "firebase/database";

const CoronaNews = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref("news");
    db.on("value", (snapshot) => {
      const firebaseNews = snapshot.val();
      setPosts(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  // console.log(posts);
  // Get post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Ganti page
  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  return (
    <div>
      <h1 style={{ color: "#0f3057", padding: "16px" }} className="text-center">
        Berita Corona Terkini
      </h1>
      <Posts posts={currentPost} loading={isLoading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
  // console.log('postActivity');
};

export default CoronaNews;
