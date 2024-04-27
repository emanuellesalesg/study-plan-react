"use client"

import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";
import { FaPen, FaRegTrashAlt} from "react-icons/fa";
import { TiPlus } from "react-icons/ti";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

const Page = () => {
  
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');

  const addTask = () => {
    if(addField.trim() === '') return false;

    dispatch(
      {
        type: 'add',
        payload: { text: addField }
      }
    )
    setAddField('');
  }

  const toggleCheck = (id: number) => {
    dispatch({
        type: 'toggleEdit',
        payload: { id }
    });
  }

  const editItem = (id: number) => {
    const item = list.find(it => it.id === id);
    if(!item) return false;

   const newText = window.prompt('Edit: ', item.text);
   if(!newText || newText.trim() === '') return false;

    dispatch({
      type: 'edit',
      payload: {
        id,
        text: newText
      }
    }) 
  }

  const deleteItem = (id: number) => {
    dispatch({
      type: 'remove',
      payload: { id }
    })
  }

  return (
    <div className="p-2 h-screen text-white">
      <div className="container mx-auto max-w-2xl font-mono">
        <div className="flex flex-col border p-6 rounded-md bg-sky-700">
          <h1 className="text-center p-6  text-5xl my-4 rounded-md font-bold text-white">Study Plan</h1>
          <div className="flex">
            <input 
            className="flex-1 p-2 bg-transparent border-b border-b-white outline-none text-2xl" 
            value={addField}
            onChange={e => setAddField(e.target.value)}
            type="text" />
            <button className="px-2 text-4xl font-bold hover:text-5xl"
            onClick={addTask}><TiPlus className="text-white"/></button>
            </div>
        </div>
        <div>
         {
          list.map((item, index) => (
              <li className={`my-2 list-none border rounded-md cursor-pointer text-2xl text-white flex items-center hover:bg-sky-900 ${(index % 2 === 0) ? 'bg-sky-400': 'bg-sky-600 boder boder-sky-600'}`} key={item.id}>  


                <div onClick={() =>toggleCheck(item.id)} className="flex-1 flex p-8">
                <div>{item.done && <MdCheckBox className="p-2 text-4xl"/>}</div>
                <div>{!item.done && <MdCheckBoxOutlineBlank className="p-2 text-4xl"/>}</div>
                <div><p className={`text-2xl break-all text-white ${item.done ? 'line-through ' : ''}`}>{item.text}</p></div>
                </div>
                
                <button onClick={() => editItem(item.id)} className="mx-3"><FaPen className="text-white hover:text-3xl"/></button>
                <button onClick={() => deleteItem(item.id)} className="mx-3"><FaRegTrashAlt className="text-white hover:text-3xl" /></button>
            
              </li>
          ))
        } 
      </div>
      </div>
    </div>
  );
}

export default Page;