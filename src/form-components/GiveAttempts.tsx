import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remAttempts, setremAttempts] = useState<number>(3);
    const [reqAttempts, setreqAttempts] = useState<string>("0");
    const intReqAttempts = parseInt(reqAttempts) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts Left: {remAttempts}
            <Form.Group>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setreqAttempts(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setremAttempts(remAttempts - 1)}
                disabled={remAttempts == 0}
            >
                use
            </Button>
            <Button
                onClick={() => setremAttempts(remAttempts + intReqAttempts)}
            >
                gain
            </Button>
        </div>
    );
}
