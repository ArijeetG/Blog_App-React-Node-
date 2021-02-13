import react, { useState, useEffect } from 'react';
import {Form, Button, Modal} from 'react-bootstrap'
const CreateNewPost = (props) => {
    const [title, setTitle] = useState('')
    const [user_name, setUserName] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = () => {
        var post = {
            title: title,
            user_name : user_name,
            description: description,
            date : new Date(Date.now()).toISOString()
        }
        console.log(post)
        props.addPost(post)
    }
    return (
        <>
            <Form onSubmit={(e)=>{
                e.preventDefault()
                handleSubmit()}}>
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="user_name">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" onChange={(e)=>setUserName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}
export default CreateNewPost;