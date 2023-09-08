import React, { useContext, useRef, useState } from 'react'
import './createNote.css'
import instance from '../../axiosfile/baseUrl';
import Cookies from "universal-cookie";
import MyContext from '../../mycontext/MyContext';



const CreateNotes = () => {
    const textareaRef = useRef(null);
    const cookie = new Cookies();

    const { notesData, setNotesData } = useContext(MyContext)

    const [noteCreatedState, setnoteCreatedState] = useState(false)
    const [loading, setLoading] = useState(false);
    const [noteContent, setNoteContent] = useState('');



    const handleClick = () => {
        const inputValue = textareaRef.current.value.trim();
        if (inputValue !== "" && inputValue !== null) {
            instance.post(`/user/writeNote?emailId = ${cookie.get("sessionToken")?.authUserToken?.user?.emails[0].email}`, { content: inputValue },
                { headers: { sessiontoken: cookie.get("sessionToken")?.authUserToken?.session_token } })
                .then(response => {
                    console.log('API response:', response.data?.user[0]?.notes);
                    setNotesData(response.data?.user[0]?.notes)
                    setnoteCreatedState(true);
                    setNoteContent(inputValue);
                    textareaRef.current.value = '';
                })
                .catch(error => {
                    console.error('API error:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            alert("no content")
        }
    };

    return (
        <div style={{ margin: 20 }}>
            <div className="note" style={{ background: "rgba(255, 255, 255, 0)", border: "solid black 1px" }}>
                <textarea
                    ref={textareaRef}
                    cols="10"
                    rows="5"
                    placeholder="Type...."
                    maxLength="100"
                    style={{ border: "solid black 1px" }}
                ></textarea>
                <div className="note__footer">
                    <span className="label"> left</span>
                    <button className="note__save" onClick={handleClick}>Save</button>
                </div>
            </div>

        </div>
    )
}

export default CreateNotes