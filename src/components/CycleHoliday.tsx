import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("World Smile Day");
    const [emoji, setEmoji] = useState<string>("😊");
    function Alph(): void {
        if (holiday === "World Smile Day") {
            setHoliday("International Music Day");
            setEmoji("🎵");
        } else if (holiday === "International Music Day") {
            setHoliday("Selfie Day");
            setEmoji("🤳");
        } else if (holiday === "Selfie Day") {
            setHoliday("Sun Day");
            setEmoji("☀️");
        } else if (holiday === "Sun Day") {
            setHoliday("The Day of the Dead");
            setEmoji("💀");
        } else if (holiday === "The Day of the Dead") {
            setHoliday("World Smile Day");
            setEmoji("😊");
        }
    }
    function Year(): void {
        if (holiday === "World Smile Day") {
            setHoliday("The Day of the Dead");
            setEmoji("💀");
        } else if (holiday === "International Music Day") {
            setHoliday("World Smile Day");
            setEmoji("😊");
        } else if (holiday === "Selfie Day") {
            setHoliday("International Music Day");
            setEmoji("🎵");
        } else if (holiday === "Sun Day") {
            setHoliday("Selfie Day");
            setEmoji("🤳");
        } else if (holiday === "The Day of the Dead") {
            setHoliday("Sun Day");
            setEmoji("☀️");
        }
    }
    return (
        <div>
            <span>
                Holiday: {emoji}
                <div>
                    <Button onClick={Alph}> Advance by Alphabet</Button>
                    <Button onClick={Year}> Advance by Year</Button>
                </div>
            </span>
        </div>
    );
}
