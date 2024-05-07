import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import styled from "styled-components";
import '../App.css';

const Wrapper = styled.div`
    padding: 16px;
    width:calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width:100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;


function Item() {
    const { item } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState(() => {
        const storedContent = localStorage.getItem(item);
        return storedContent ? storedContent : "";
    });

    return (
        <Wrapper>
            <Container>
                <input
                    style={{height: '20px'}}
                    value={item}
                    readOnly
                />

                <input
                    style={{height: '480px'}}
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />

                <button
                    className="button"
                    onClick={() => {
                        localStorage.setItem(item, content);
                        localStorage.getItem(item);
                        navigate("/");
                    }}
                >
                    저장
                </button>
            </Container>
        </Wrapper>
    );
}

export default Item;