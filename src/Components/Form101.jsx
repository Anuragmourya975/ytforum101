import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

function Form101(props) {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
      link: "",
    });
  };

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
    link: "",
  });
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Relevent Channels 🧐
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Channel Name</Form.Label>
            <Form.Control
              type="text"
              name="creator"
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Channel Link</Form.Label>
            <Form.Control
              type="text"
              name="link"
              value={postData.link}
              onChange={(e) =>
                setPostData({ ...postData, link: e.target.value })
              }
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              type="text"
              name="tags"
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value.split(",") })
              }
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <FloatingLabel
            controlId="floatingTextarea"
            label="Description About Channel...."
            className="mb-3"
          >
            <Form.Control
              as="textarea"
              placeholder="Description..."
              name="message"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </FloatingLabel>

          <Form.Group controlId="formGridState">
            <Form.Label>Channel Category</Form.Label>
            <Form.Select defaultValue="">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <br />

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Channel Image</Form.Label>
            {/* <Form.Control
             
            /> */}
            <br />
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="creator"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          {/* <br /> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>

          <Button
            variant="secondary"
            onClick={clear}
            style={{ marginLeft: "5px" }}
          >
            Clear
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default Form101;
