import { useState } from "react";
import {v4 as uuidv4 } from "uuid"
import styles from './styles.module.scss'
import axios from "axios";

const CreatePost = ({setIsCreatePost} : {setIsCreatePost: React.Dispatch<React.SetStateAction<boolean>>}) => {
    const [ tags, setTags ] = useState<string>(' ')
    const [ newInfo, setNewInfo ] = useState({
        title: '',
        description: '',
    })
    let arrTag = tags.split(',')
    const handleCreate = async(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault()
        await axios.post(`https://api-test-web.agiletech.vn/posts`, {
            id: uuidv4(),
            title: newInfo.title,
            tags: arrTag,
            description: newInfo.description
        })
        setIsCreatePost(false)
    }
  return (
    <form className={styles['form']}>
        <h5>CREATE POST</h5>
        <label htmlFor="title">Title</label><br/>
        <input onChange={(e) => setNewInfo({...newInfo, title: e.target.value})} value={newInfo.title} id="title"/><br/>
        <label htmlFor="description">Description</label><br/>
        <input onChange={(e) => setNewInfo({...newInfo, description: e.target.value})} value={newInfo.description} id="description"/><br/>
        <label htmlFor="tags">Tags</label><br/>
        <input onChange={(e) => setTags(e.target.value)} />
        <button onClick={handleCreate}>Create</button>
        <button onClick={() => {setIsCreatePost(false)}}>Close</button>
    </form>
  );
};

export default CreatePost;
