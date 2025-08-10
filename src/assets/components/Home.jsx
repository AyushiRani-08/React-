import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [serachParams, setSearchParams] = useSearchParams();
    const pasteID = serachParams.get("pasteId");
    const dispatch=useDispatch();

    function createPaste(){
        const paste={
            title:title,
            content:value,
            _id:pasteID || Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }
        if(pasteID){
            //update paste
            dispatch(updateToPaste(paste));
        }else{
            //create paste 
            dispatch(addToPaste(paste));
        }
        //after creation or updation
        setTitle('');
        setValue('');
        setSearchParams({});

    }
    return (
        <div>
            <div className='flex flex-row gap-7 place-content-between'>
                <input
                    className='p-2 rounded-2xl mt-2 w-[67%] pl-4'
                    type='text'
                    placeholder='Enter title here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className='p-2 rounded-2xl mt-2' onClick={createPaste}>
                    {
                        pasteID ? "Update Paste" : "Create my Paste"
                    }
                </button>
            </div>
            <div className='mt-8'>
                <textarea 
                   className='rounded-2xl mt-4 min-w-[500px] p-4'
                   value={value}
                   placeholder='Enter Content here'
                   onChange={(e) => setValue(e.target.value)}
                   rows={20}

                />
            </div>
        </div>


    )
}

export default Home