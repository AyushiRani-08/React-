import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'


const initialState = {
  pastes:localStorage.getItem("pastes")? JSON.parse(localStorage.getItem("pastes")):[]
}

export const pasteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToPaste: (state,action) => {
      const paste=action.payload;
      //if same paste of same of title

      state.pastes.push(paste);
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast("Paste created successfully");
      
    },
    updateToPaste: (state,action) => {
      const paste=action.payload;
      const index=state.pastes.findIndex((item) =>
        item.id===paste.id)
      if(index >= 0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste updated");
      }
    },
    resetAllPastes: (state, action) => {
      state.pastes=[];
      localStorage.removeItem("pastes");
    },
    removeFromPastes:(state,action) => {
      const pasteId= action.payload;
      console.lof(pasteId);
      const index=state.pastes.findIndex((item) => item._id===pasteId);
      if(index >= 0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste deleted");
      }

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPastes ,removeFromPastes} = pasteSlice.actions

export default pasteSlice.reducer