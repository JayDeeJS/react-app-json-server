import { postsAdd, postsDelete, postsEdit, postsFetch } from "requests/authActions";
import ModalWindow from "components/ModalWindow";
import { useState, useEffect } from "react";
import ModalEdit from "./ModalEdit";

const Posts = () => {
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    postsFetch().then((data) => setPosts(data));
  }, []);

  const handleAdd = async () => {
    try {
      const newPost = await postsAdd(title, author);
      setPosts([...posts, newPost]);
      setIsShow(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    await postsDelete(id);
    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  const handleEdit = async (id) => {
    try {
      await postsEdit(id, title, author);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <div className="postsBlock">
      <h1>Posts</h1>

      <button onClick={() => setIsShow(!isShow)}>Add new post</button>
      {isShow && (
        <ModalWindow
          handleClose={handleClose}
          handleAdd={handleAdd}
          handleEdit={handleEdit}
          author={author}
          title={title}
          setTitle={setTitle}
          setAuthor={setAuthor}
        />
      )}

      <div className="postsFrame">
        {posts.map((post) => (
          <div className="posts" key={post.id}>
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
            <div className="postsControls">
              <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
              {isEdit && (
                <ModalEdit
                  handleClose={handleClose}
                  handleEdit={handleEdit}
                  author={author}
                  title={title}
                  setTitle={setTitle}
                  setAuthor={setAuthor}
                  id={post.id}
                />
              )}
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;