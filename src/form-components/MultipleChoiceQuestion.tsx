import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [userChoice, setuserChoice] = useState<string>(options[0]);
    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setuserChoice(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userAnswer">
                <Form.Label>Select and answer</Form.Label>
                <Form.Select value={userChoice} onChange={updateChoice}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <span>
                {" "}
                {userChoice == expectedAnswer ? <div>✔️</div> : <div>❌</div>}
            </span>
        </div>
    );
}
