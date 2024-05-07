import React, {useState, useEffect} from 'react';
import TodoBoard from "../components/TodoBoard";

function Main() {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState(() => {
        const storedTodoList = localStorage.getItem('todoList');
        return storedTodoList ? JSON.parse(storedTodoList) : [];
    });
    const addItem = () => {
        setTodoList([...todoList, inputValue]);
    }

    const deleteItem = (item) => {
        setTodoList(todoList.filter((todo) => todo !== item));
        localStorage.removeItem(item); // 로컬 저장소에서 항목 삭제
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(todoList));
        localStorage.getItem('todoList');
    }, [todoList]);

    return (
            <main>
                <input
                    className='input'
                    placeholder='할 일을 입력하세요'
                    value={inputValue}
                    type="text"
                    onChange={(event) => setInputValue (event.target.value)}/>
                <button className="button" onClick={addItem}>추가</button>
                <TodoBoard todoList={todoList} deleteItem={deleteItem}/>
            </main>
    );
}

export default Main;
