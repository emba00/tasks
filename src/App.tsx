import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import kaido from "./images/kaido.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1 className="App-header">
                Cisc275 w/ Emmanuel Mbah and The Weakest Yonko
            </h1>
            <img src={kaido} alt="KAIDOOOOO" width="250" height="150" />
            <ul>
                <li>1st</li>
                <li>2nd</li>
                <li>3rd</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        Column1
                        <div className="Rect"></div>
                    </Col>
                    <Col>
                        Column2
                        <div className="Rect"></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
