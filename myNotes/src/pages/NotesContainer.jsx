import React, { useEffect, useState } from 'react'
import NoteCreater from '../components/notes/NoteCreater'
import Headers from '../components/header/Headers'
import CreateNotes from '../components/createNotes/CreateNotes'
import instance from '../axiosfile/baseUrl'
import Cookies from "universal-cookie";

const NotesContainer = () => {
    const cookie = new Cookies();
    const [notesData, setNotesData] = useState([])

    useEffect(() => {
        console.log("hellooooo cook", cookie.get("sessionToken")?.authUserToken)
        instance.get(`/user/getNotes?emailId = ${cookie.get("sessionToken")?.authUserToken?.user?.emails[0].email}`,
            { headers: { sessiontoken: cookie.get("sessionToken")?.authUserToken?.session_token } }
        ).then((resp) => {
            setNotesData(resp.data)
        }).catch((err) => {
            alert("USER NOT AUTHENTICATED");
        });

    }, [])


    return (
        <div className="notes">
            <Headers />
            <CreateNotes />
            {
                notesData.map((note, index) => (

                    <NoteCreater key={index} note={mynote} />
                ))
            }

        </div>
    )
}

export default NotesContainer