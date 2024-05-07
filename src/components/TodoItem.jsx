import React from "react";
import { useNavigate } from 'react-router-dom'; // 사용하는 라우터에 맞게 수정되어야 합니다.
import '../App.css'

function TodoItem(props) {
    const navigate = useNavigate();


    return (
        <div className="input-item">
            <span onClick={() => {
                navigate(`/item/${props.item}`);
            }} className='item'>{props.item}</span>
            <button className='button2' onClick={() => props.deleteItem(props.item)}>삭제</button>
        </div>
    );
}

export default TodoItem;