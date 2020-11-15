import { db } from "../firebase/firebase-config"

export const loadNotes=async(uid)=>{
    const notesSnap=await db.collection(`${uid}/journal/notes`).get();
    const notes=[];
        notesSnap.forEach(snapChil=>{
            notes.push({
                id:snapChil.id,
                ...snapChil.data()
            })
        })
       
    return notes;

}