import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [value, setValue] = useState<QuestionType>("short_answer_question");
    function changeqtype(): void {
        if (value === "short_answer_question") {
            setValue("multiple_choice_question");
        } else {
            setValue("short_answer_question");
        }
    }
    let ques;
    if (value === "short_answer_question") {
        ques = "Short Answer";
    } else {
        ques = "Multiple Choice";
    }
    return (
        <span>
            <Button onClick={changeqtype}>Change Type</Button>
            {ques}
        </span>
    );
}
