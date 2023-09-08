import React, { useEffect, useState } from 'react'
import NoteCreater from '../components/notes/NoteCreater'
import Headers from '../components/header/Headers'
import CreateNotes from '../components/createNotes/CreateNotes'
import instance from '../axiosfile/baseUrl'
import Cookies from "universal-cookie";
import MyContext from '../mycontext/MyContext'

const NotesContainer = () => {
    const cookie = new Cookies();
    const [notesData, setNotesData] = useState([])

    useEffect(() => {
        instance.get(`/user/getNotes?emailId = ${cookie.get("sessionToken")?.authUserToken?.user?.emails[0].email}`,
            { headers: { sessiontoken: cookie.get("sessionToken")?.authUserToken?.session_token } }
        ).then((resp) => {
            console.log("data here", resp.data?.user[0]?.notes)
            setNotesData(resp.data?.user[0]?.notes)
        }).catch((err) => {
            alert("USER NOT AUTHENTICATED");
        });

    }, [])


    return (
        <div className="notes">
            <MyContext.Provider value={{ notesData, setNotesData }}>
                <Headers />
                <CreateNotes />
                {
                    notesData.map((note, index) => (
                        <NoteCreater key={index} notes={note} />
                    ))
                }
            </MyContext.Provider>
        </div>
    )
}

export default NotesContainer