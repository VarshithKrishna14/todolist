import React, { useState } from "react";

const Compp = () => {
    const [items,setitems] = useState([]);
    //a array named items which has all items
    const handleChange = (e,id)=>{
        const {value} = e.target;
        setitems(previtems =>{
            const updateditems = [...previtems];
            const itemindex = updateditems.findIndex(item=>item.id===id);

            if(itemindex!==-1){
                updateditems[itemindex] = {id,value};

            }
            else{
                updateditems.push({id,value});
            }
            return updateditems;
        });
    }
  return (
    <div>{
        items.map(item=>(
            <input key={item.id} type="text" value={item.value || ''} onChange={(e)=> handleChange(e,item.id)}
            />
        ))}
        </div>
  )
}

export default Compp
