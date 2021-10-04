import React from "react";
import "./Cards.css";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import {
  ChevronDoubleDown,
  ChevronDoubleUp,
  // ArrowDown,
  ChatRightDots,
  // Capslock,
  Link,
} from "react-bootstrap-icons";

function Cards101() {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4">
        {Array.from({ length: 7 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src="https://yt3.ggpht.com/ytc/AKedOLSFi8tOy-PQhWLyh76f8gQqnL02xBJUTBpRj9LGFA=s900-c-k-c0x00ffffff-no-rj"
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <hr />
                <div className="d-flex justify-content-evenly">
                  <ChevronDoubleUp className="Icons" />
                  <ChevronDoubleDown className="Icons" />
                  <ChatRightDots className="Icons" />
                  <Link className="Icons" />
                </div>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards101;
