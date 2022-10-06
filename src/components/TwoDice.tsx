import { readlinkSync } from "fs";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [ldie, setLdie] = useState<number>(5);
    const [rdie, setRdie] = useState<number>(2);
    function match(): number {
        let res = 15;
        ldie == rdie ? (res = 2) : res;
        ldie == 1 && ldie == rdie ? (res = 1) : res;
        return res;
    }
    return (
        <div>
            <span data-testid="left-die">
                ldie
                <Button onClick={() => setLdie(d6())}> Roll Left </Button>
                {ldie} {match() == 2 && <div>You Win!</div>}
            </span>
            <span data-testid="right-die">
                rdie
                <Button onClick={() => setRdie(d6())}> Roll Right </Button>
                {rdie} {match() == 1 && <div>You Lose :(</div>}
            </span>
        </div>
    );
}
