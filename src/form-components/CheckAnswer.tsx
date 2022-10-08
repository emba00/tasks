import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setuserAnswer] = useState<string>();
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setuserAnswer(event.target.value)
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>Enter Answer:</Form.Label>
                <Form.Control value={userAnswer} onChange={updateAnswer} />
            </Form.Group>
            <h3>Check Answer</h3>
        </div>
    );
}
