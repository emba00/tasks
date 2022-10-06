import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    // eslint-disable-next-line prefer-const
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function trackAttempts(): void {
        setAttempts(progress != true ? attempts - 1 : attempts);
        setProgress(progress != true ? !progress : progress);
    }
    return (
        <span>
            <div>
                <Button
                    onClick={trackAttempts}
                    disabled={progress || attempts <= 0}
                >
                    Start Quiz
                </Button>
                <div>{attempts}</div>
            </div>
            <Button onClick={() => setProgress(!progress)} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={progress}
            >
                Mulligan
            </Button>
        </span>
    );
}
