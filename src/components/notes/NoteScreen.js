import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [values, handleInputChange,reset] = useForm(note);
  const dispatch = useDispatch();
  const { body, title } = values;
  const activeId=useRef(note.id);

  useEffect(() => {
    if(note.id!==activeId.current){
        reset(note)
        activeId.current=note.id
    }
  }, [note,reset])

  useEffect(() => {
      dispatch(activeNote(values.id,{...values}));
      
  }, [values,dispatch])

  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <textarea
          placeholder="What happend today"
          className="notes__textarea"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {note.url && (
          <div className="notes__image">
            <img
              alt="imagen"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            />
          </div>
        )}
      </div>
    </div>
  );
};
