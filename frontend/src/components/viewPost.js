import axios from 'axios'
import react, { useEffect, useState } from 'react'
import {Button, Card, Modal,Form, Container} from 'react-bootstrap'
const Post = (props)=>{
    const [posts,setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [user_name, setUserName] = useState('')
    const [description, setDescription] = useState('')
    const [editModal, setEditModal] = useState(false)
    const [editId, setEditId] = useState(0)
    useEffect(()=>{
        console.log(props.postList)
        setPosts(props.postList)
    },[])

    const handleEdit = (id)=>{
        const editedPost = {
            user_id : id,
            user_name : user_name,
            description : description,
            title : title
        }
        axios.put('http://localhost:4000/updateBlog',editedPost)
            .then((res)=>{
                console.log(res)
                props.editordelete()
            })
            .catch((err)=>console.log(err))
        props.editordelete()
    }

    const handleDelete = (user_id)=>{
        axios.post('http://localhost:4000/deleteBlog',{id:parseInt(user_id)})
            .then((res)=>{
                console.log(res)
                props.editordelete()
            })
            .catch((err)=>console.log(err))
    }
    return props.postList.map((post)=>{
        return(
        <Container style={{margin: '10px'}}>
            <Card key={post.user_id}>
                <Card.Header as="h3">{post.title}</Card.Header>
                <Card.Body className="text-center">
                    
                    <Card.Text as="h5">{post.description}</Card.Text>
                    <Card.Subtitle><i><small>~{post.user_name}</small></i></Card.Subtitle>
                    <Button onClick={()=>{  setEditId(post.user_id)
                                            setEditModal(true)
                                        }} variant='outline-primary'>Edit</Button>
                    <Button onClick={()=>handleDelete(post.user_id)} variant='outline-warning'>Delete</Button>
                </Card.Body>
                <Card.Footer>{new Date(post.date).toDateString()}</Card.Footer>
                
            </Card>
            <Modal show={editModal} onHide={()=>setEditModal(false)}>
                <Modal.Body>

                    <Form >
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
                    </Form>
                </Modal.Body>

                    <Button variant="primary" type="submit" onClick={()=>{handleEdit(editId) 
                                                                        setEditModal(false)
                                                                        }}>
                        Submit
                    </Button>
            </Modal>
        </Container>
        )
    })
}
export default Post;