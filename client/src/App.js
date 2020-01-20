import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row, Media } from 'react-bootstrap';
import socketIOClient from "socket.io-client";
const App = () => {
  
  const feeds = useSelector(state => state.feeds, (left, right) => false);
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = socketIOClient("http://localhost:9090");
    socket.on("feeds", data => {
      dispatch({type: 'update', payload: data});
    });

    return () => {
      socket.off("feeds");
    }
  }, [dispatch]);
  return (
    <Container>
      <Row className="justify-content-md-center margin-top">
        <Col>
          <ul className="list-unstyled">
            {feeds.map((feed) => {
              return (
                <Media as="li" key={feed.id}>
                <img
                  width={74}
                  height={74}
                  className="mr-3"
                  src={"https://picsum.photos/200?bluff="+feed.id}
                  alt={feed.id}
                />
                <Media.Body>
                  <h5>{feed.title}</h5>
                  <p>
                    {feed.body}
                </p>
                </Media.Body>
              </Media>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
