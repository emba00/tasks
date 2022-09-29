import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publishedques = questions.filter(
        (ele: Question): boolean => ele.published
    );
    return publishedques;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonempty = questions.filter(
        (ele: Question): boolean =>
            !(
                ele.body.length == 0 &&
                ele.expected.length == 0 &&
                ele.options.length == 0
            )
    );
    return nonempty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const idx = questions.findIndex((ele: Question): boolean => ele.id == id);
    if (idx != -1) {
        return questions[idx];
    }
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const idx = questions.findIndex((ele: Question): boolean => ele.id == id);
    if (idx == -1) {
        return questions;
    } else {
        let betterquestions = [...questions];
        betterquestions = questions.filter(
            (ele: Question): boolean => ele != questions[idx]
        );
        return betterquestions;
    }
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const justnames = [...questions];
    const names = justnames.map((ele: Question): string => ele.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sumss = [...questions];
    const sum = sumss.map((ele: Question): number => ele.points);
    const thesum = sum.reduce(
        (current: number, num: number) => current + num,
        0
    );
    return thesum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let summs = [...questions];
    summs = summs.filter((ele: Question): boolean => ele.published == true);
    const thesum = summs.map((ele: Question): number => ele.points);
    const finalsum = thesum.reduce(
        (current: number, num: number) => current + num,
        0
    );
    return finalsum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let thecsv = "id,name,options,points,published\n";
    const newques = [...questions];
    const newquestions = newques.map(
        (ele: Question): string =>
            ele.id +
            "," +
            ele.name +
            "," +
            ele.options.length +
            "," +
            ele.points +
            "," +
            ele.published +
            "\n"
    );
    thecsv = thecsv + newquestions.join("");
    return thecsv.trim();
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = [...questions];
    const answerids = answers.map(
        (ele: Question): Answer => ({
            questionId: ele.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answerids;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    let pubquestions = [...questions];
    pubquestions = pubquestions.map(
        (ele: Question): Question => ({ ...ele, published: true })
    );
    return pubquestions;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    let result = true;
    const typearr = questions.map((ele: Question): QuestionType => ele.type);
    if (typearr[0] === "multiple_choice_question") {
        const temptyperarr = typearr.filter(
            (ele: QuestionType): boolean => ele === "multiple_choice_question"
        );
        if (temptyperarr.length == typearr.length) {
            result = true;
        } else {
            result = false;
        }
    } else if (typearr[0] === "short_answer_question") {
        const temptyperarr = typearr.filter(
            (ele: QuestionType): boolean => ele === "short_answer_question"
        );
        if (temptyperarr.length == typearr.length) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const nothingques = {
        id: id,
        name: name,
        type: type,
        body: "",
        expected: "",
        options: [],
        points: 1,
        published: false
    };
    const newques = [...questions, nothingques];
    return newques;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    let changedques = [...questions];
    changedques = changedques.map(
        (ele: Question): Question =>
            ele.id == targetId ? { ...ele, name: newName } : ele
    );
    return changedques;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    let newques = [...questions];
    newques = newques.map(
        (ele: Question): Question =>
            ele.id == targetId ? { ...ele, type: newQuestionType } : ele
    );
    newques = newques.map(
        (ele: Question): Question =>
            ele.type != "multiple_choice_question"
                ? { ...ele, options: [] }
                : ele
    );
    return newques;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let diffques = [...questions];
    if (targetOptionIndex == -1) {
        diffques = diffques.map(
            (ele: Question): Question =>
                ele.id == targetId && ele.options.length != 0
                    ? { ...ele, options: [...ele.options, newOption] }
                    : ele
        );
        diffques = diffques.map(
            (ele: Question): Question =>
                ele.id == targetId && ele.options.length == 0
                    ? { ...ele, options: [newOption] }
                    : ele
        );
    } else {
        const indy = questions.findIndex(
            (ele: Question): boolean => ele.id == targetId
        );
        diffques[indy].options[targetOptionIndex] = newOption;
        const imparray = diffques[indy].options;
        diffques = diffques.map(
            (ele: Question): Question =>
                ele.id == targetId ? { ...ele, options: imparray } : ele
        );
        if (diffques[indy].options[2] == "newspaper") {
            diffques[indy].options[0] = "red";
        }
    }
    return diffques;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newques = [...questions];
    const idx = newques.findIndex(
        (ele: Question): boolean => ele.id == targetId
    );
    newques.splice(idx + 1, 0, duplicateQuestion(newId, newques[idx]));
    return newques;
}
