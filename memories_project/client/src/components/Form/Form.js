import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '', title:'', message:'', tags:'', selectorFile:'',
    });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message.id === currentId) : null));
    const classes = useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title:'', tags:'', selectedFile: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outline" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator:e.target.value })}/>
                <TextField name="title" variant="outline" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title:e.target.value })}/>
                <TextField name="message" variant="outline" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message:e.target.value })}/>
                <TextField name="tags" variant="outline" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags:e.target.value })}/>
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="container" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;