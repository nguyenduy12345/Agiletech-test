import { useState } from "react";

import styles from './styles.module.scss'
import axios from "axios";
type Post = {
    id: Number | String | any,
    tags: [String],
    description: String,
    title: String,
    posts: [],
    tag?: String | number,
    key?: String | number,
    total_page: [number],
    value?: string
  }
const EditPost = ({edit, setEdit}: {edit: Post | any, setEdit: React.Dispatch<React.SetStateAction<Post | undefined | boolean>>}) => {
    const [ tags , setTags ] = useState< [string | Number] | String | number | any>(edit.tags)
    const [ newInfo, setNewInfo ] = useState({
        title: edit.title,
        description: edit.description,
        tags: edit.tags
    })
    const handleSave = async(e: any) =>{
        e.preventDefault()
        await axios.patch(`https://api-test-web.agiletech.vn/posts/${edit.id}`, {
            title: newInfo.title,
            tags,
            description: newInfo.description
        })
        setEdit(false)
    }
  return (
    <form className={styles['form']}>
        <h5>EDIT POST</h5>
        <label htmlFor="title">Title</label><br/>
        <input onChange={(e) => setNewInfo({...newInfo, title: e.target.value})} value={newInfo.title} id="title"/><br/>
        <label htmlFor="description">Description</label><br/>
        <input onChange={(e) => setNewInfo({...newInfo, description: e.target.value})} value={newInfo.description} id="description"/><br/>
        <label htmlFor="tags">Tags</label><br/>
        <input onChange={(e) => setTags([e.target.value])} value={tags} />
        <button onClick={handleSave}>Save</button>
        <button onClick={() => {setEdit(false)}}>Close</button>
    </form>
  );
};

export default EditPost;
