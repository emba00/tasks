import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    function changeColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                id="Seeing-red"
                label="Red"
                style={{ backgroundColor: "red" }}
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                id="Seeing-blue"
                label="Blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                id="Seeing-green"
                label="Green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                id="Seeing-purple"
                label="Purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                id="Seeing-pink"
                label="Pink"
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                id="Seeing-orange"
                label="Orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                id="Seeing-black"
                label="Black"
                value="black"
                checked={color === "black"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={changeColor}
                id="Seeing-white"
                label="White"
                value="white"
                checked={color === "white"}
            />
            <div>
                You have chosen:
                <span
                    data-testid="colored-box"
                    style={{
                        width: "75px",
                        height: "40px",
                        backgroundColor: color
                    }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
