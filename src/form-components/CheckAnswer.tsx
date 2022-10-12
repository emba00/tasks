import React, { useState } from "react";
import { Form } from "react-bootstrap";
//import { setTokenSourceMapRange } from "typescript";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setuserAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setuserAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="formtextname">
                <Form.Control value={userAnswer} onChange={updateAnswer} />
                <span>
                    {" "}
                    {userAnswer === expectedAnswer ? (
                        <div>✔️</div>
                    ) : (
                        <div>❌</div>
                    )}{" "}
                </span>
            </Form.Group>
        </div>
    );
}
