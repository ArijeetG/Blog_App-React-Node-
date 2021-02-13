import React, {useEffect, useState, useCallback, useReducer} from 'react';
import {Button, Container, Form, FormControl, Modal, Navbar, Nav} from 'react-bootstrap'
import axios from 'axios';
import CreateNewPost from './createNewPost'
import ViewPost from './viewPost'

//Displays all post and handles the searchBar and add post functionality

const DisplayAllPosts = () => {
    const [posts, setPosts] = useState([])
    const [searchTitle, setSearchTitle] = useState('') //search bar value
    const [updated, setUpdated] = useState(false)  //for useEffect reference to update the posts state after every add, edit or delete post.
    const [addPostButton, setAddPostButton] = useState(false) 
    useEffect(()=>updatePost(),[updated])
    const addPost =(e)=>{
        setPosts([...posts,e])
        console.log(posts)
        var post = {
            user_name : `${e.user_name}`,
            description : `${e.description}`,
            title : `${e.title}`
        }
        axios.post('http://localhost:4000/newBlog',post)
            .then((result)=>{
                console.log(result)
            })
            .catch((Err)=>console.log(Err))
        setAddPostButton(false)
    }

    //Updates the post state variable to contain the current set of all blog posts.
    const updatePost = (e)=>{
        axios.get('http://localhost:4000/allBlogs')
            .then((res)=>{
                console.log(res.data)
                var prevPost = posts
                prevPost.push(res.data)
                setPosts(res.data)
            })
            .catch((err)=>console.log(err))
        setUpdated(true)
    }

    const handleSearchBar = (e)=>{
        setSearchTitle(e)
    }

    const filteredPost = 
        posts.filter(post=>{
            return post.title.toLowerCase().includes(searchTitle.toLowerCase())
        })
    
    return (
    <Container style={{alignItems:'center'}}>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>My Blog App</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = "mr-auto">
                    <Button onClick={()=>setAddPostButton(true)} style={{alignItems:'center'}}>Add Post</Button>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Enter the title you want to search" onChange={(e)=>handleSearchBar(e.target.value)}/>
                </Form>
            </Navbar.Collapse>
        </Navbar>
        <Modal show={addPostButton} onHide={()=>{
            setAddPostButton(false)
        }}>
            <Modal.Body>
                <CreateNewPost addPost = {addPost}/> 
            </Modal.Body>
        </Modal>
        <ViewPost postList = {filteredPost?filteredPost:posts} editordelete ={(editedPost)=>{setUpdated(false)}}/>
        
        
    </Container>
    )
}
export default DisplayAllPosts