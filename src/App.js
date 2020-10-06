import React, {useState} from 'react';
import ListIteam from "./ListIteam";
import Header from "./Header";

const initialIteamList = [
    [
        {id: 1, user: 'Vadim', gender: 'Male', active: true},
    {id: 2, user: 'Victor', gender: 'Male', active: true},
    {id: 3, user: 'Sasha', gender: 'Female', active: true}
    ],
    [
    {id: 4, user: 'Vasy', gender: 'Male', active: true},
    {id: 5, user: 'Geny', gender: 'Female', active: true},
    {id: 6, user: 'Masha', gender: 'Female', active: true}
    ],

     [
    {id: 7, user: 'Lisa', gender: 'Female', active: true},
    {id: 8, user: 'Sonia', gender: 'Female', active: true},
    {id: 9, user: 'Marta', gender: 'Female', active: true}
    ],

     [
    {id: 10, user: 'Pety', gender: 'Male', active: true},
    {id: 11, user: 'Vova', gender: 'Male', active: true},
    {id: 12, user: 'Misha', gender: 'Male', active: true}
    ]]

function App() {


    const [list, setList] = useState(initialIteamList);


    const moveElementToAnotherListDown = (id,index, val) => {
        const newList = [...list];
        const newArr = newList[index];
        const newElem = newArr.find( el => el.id === id)
        newList[index+val].push(newElem)
        newList[index] = newArr.filter(el => el.id !== id)
        setList(newList)
    }

    const setCountSize = (size) => {
       const newList = [...list];

       for(let i = 0; i < size; i ++){
           const newElement = [
               {id: Math.random(), user: "Undefind" + i, gender: "Undefind"}
           ]
           newList.push(newElement);
       }
        setList(newList);
    }


  return (

    <div>

        <div>

        <Header
            setCountSize={setCountSize}
        />

        <hr/>

        </div>

        {list.map((el, index) => <ListIteam
            list={list}
            index={index}
            key={Math.random()}
            el={el}
            moveElementToAnotherListDown={moveElementToAnotherListDown}

        /> )}


    </div>
  );
}

export default App;
