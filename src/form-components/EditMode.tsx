import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [userinfo, setUserinfo] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const [editmode, setEditmode] = useState<boolean>(false);
    function changeMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditmode(event.target.checked);
        if (!editmode) {
            setUserinfo("Your Name");
        }
    }
    function updateUser(event: React.ChangeEvent<HTMLInputElement>) {
        if (editmode) {
            setUserinfo(event.target.value);
        } else {
            setUserinfo("Your Name");
        }
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <h3> Edit Mode </h3>
            <Form.Check
                type="switch"
                label="Edit Mode?"
                checked={editmode}
                onChange={changeMode}
            />
            {editmode && (
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="student?"
                    checked={student}
                    onChange={updateStudent}
                />
            )}
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                {editmode && (
                    <Form.Control value={userinfo} onChange={updateUser} />
                )}
            </Form.Group>
            <span>
                {" "}
                {student ? (
                    <div>{userinfo} is a student</div>
                ) : (
                    <div>{userinfo} is not a student</div>
                )}{" "}
            </span>
        </div>
    );
}
