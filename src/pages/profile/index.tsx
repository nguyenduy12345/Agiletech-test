import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

import EditPost from "../../components/editpost";
import CreatePost from "../../components/createpost";

import styles from "./styles.module.scss";

type Post = {
  id: Number | String | any;
  tags: [String];
  description: String;
  title: String;
  posts: [];
  tag?: String | number;
  key?: String | number;
  total_page: [number];
  value?: string | readonly string[] | number | undefined;
};
type Page = {
  total_page?: [];
  page: number;
  map: any;
};

const Profile = () => {
  const [posts, setPosts] = useState<Post>();
  const [pages, setPages] = useState<Page>();
  const [edit, setEdit] = useState<Post | any>();
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isCreatePost, setIsCreatePost] = useState<boolean>(false);
  const pageLength = [];
  if (pages) {
    for (let i = 0; i < +pages; i++) {
      pageLength.push(i);
    }
  }
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await axios.get(
          "https://api-test-web.agiletech.vn/posts"
        );
        setPosts(posts.data);
        setPages(posts.data.total_page);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, [edit || isCreatePost]);
  const handleEditPost = (post: Post) => {
    setEdit(post);
  };
  const handleDeletePost = async (id: String | number) => {
    await axios.delete(`https://api-test-web.agiletech.vn/posts/${id}`);
    const posts = await axios.get("https://api-test-web.agiletech.vn/posts");
    setPosts(posts.data);
    setPages(posts.data.total_page);
  };
  const handlePagination = async (numb: number) => {
    const posts = await axios.get(
      `https://api-test-web.agiletech.vn/posts?page=${numb}`
    );
    setPosts(posts.data);
    setPages(posts.data.total_page);
  };
  const scrollToTop = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleLogout = async () => {
    localStorage.removeItem("ACCESS_TOKEN");
    setIsLogin(false);
    await axios.delete("https://api-test-web.agiletech.vn/auth/logout");
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", delay: 0.2 }}
      className={styles["profile"]}
    >
      {isCreatePost && <CreatePost setIsCreatePost={setIsCreatePost} />}
      {edit && <EditPost edit={edit} setEdit={setEdit} />}
      <div className={styles["profile__menu"]}>
        <Link to="/home">
          <img src="/img/Logo.png" />
        </Link>
        <Link to="">Posts</Link>
        <Link to="" onClick={handleLogout}>
          Log out
        </Link>
      </div>
      {isLogin ? "" : <Navigate to="/signin" />}
      <div className={styles["profile__actions"]}>
        <div className={styles["profile__function"]}>
          <div
            onClick={() => setIsCreatePost(true)}
            className={styles["add__new"]}
          >
            Add new
          </div>
          <ul>
            <li>
              <input type="text" placeholder="Title" />
            </li>
            <li>
              <input type="text" placeholder="Tags" />
              <img src="/img/icons8-arrow.png" />
            </li>
          </ul>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Tags</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts
              ? posts.posts.map((item: Post, index: number) => (
                  <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.title}</td>
                    <td>{item.description}</td>
                    <td>{item.tags.map(item => item += ' ')}</td>
                    <td>
                      <img
                        onClick={() => handleEditPost(item)}
                        src="/img/icons8-edit.png"
                      />
                      <img
                        onClick={() => handleDeletePost(item.id)}
                        src="/img/icons8-delete.png"
                      />
                    </td>
                  </tr>
                ))
              : []}
          </tbody>
        </table>
        <div className={styles["profile__pagination"]}>
          <button>Phần phân trang</button>
          {pageLength &&
            pageLength.map((numb) => (
              <button
                onClick={() => {
                  handlePagination(numb + 1);
                  scrollToTop();
                }}
                key={numb}
              >
                {+numb + 1}
              </button>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
