import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import kaido from "./images/kaido.png";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
<<<<<<< HEAD
=======
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

>>>>>>> upstream/task-forms
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Cisc275 w/ Emmanuel Mbah and The Weakest Yonko
            </header>
            <h1> HEADERRRRRRR </h1>
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
            <hr></hr>
<<<<<<< HEAD
            <DoubleHalf></DoubleHalf>
            <p></p>
=======
            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
>>>>>>> upstream/task-forms
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}
export default App;
