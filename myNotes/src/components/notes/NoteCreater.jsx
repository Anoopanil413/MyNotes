import React, { useContext } from 'react'
import "./note.css";
import DeleteIcon from '@mui/icons-material/Delete';
import instance from '../../axiosfile/baseUrl';
import Cookies from "universal-cookie";
import MyContext from '../../mycontext/MyContext';




const NoteCreater = ({ notes }) => {
    const cookie = new Cookies();
    const { notesData, setNotesData } = useContext(MyContext)


    const utcDate = new Date(notes?.createdAt);
    const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);
    const options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
    };
    const istString = istDate.toLocaleString("en-IN", options);

    const deleteNotes = () => {
        instance.delete(`/user/deleteNote?emailId = ${cookie.get("sessionToken")?.authUserToken?.user?.emails[0].email}&v=${notes._id}`, { headers: { sessiontoken: cookie.get("sessionToken")?.authUserToken?.session_token } }
        ).then((response) => {
            setNotesData(response.data?.user[0]?.notes)
        })
    }

    return (
        <div className="note">
            <div className="note__body">
                {notes?.content}
            </div>
            <div className="note__footer" style={{ justifyContent: "flex-end" }}>
                <div >
                    {istString}
                </div>
                <DeleteIcon
                    onClick={deleteNotes}
                    className="note__delete"
                    aria-hidden="true"

                ></DeleteIcon>
            </div>
        </div>
    )
}

export default NoteCreater


