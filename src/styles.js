import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: grey;

    input{
        border: 2x solid grey;
        width: 120px;
        height: 30px;
        border-radius: 6px;
        border: none;
        background-color: #d2d2d2;
    }

    button{
        width: 80px;
        height: 30px;
        margin: 0 5px;
        border-radius: 6px;
        border: none;
        background-color: #d2d2d2;
    }

`
export const ContentComment = styled.div`
    background-color: #afabab;
    border: none;
    border-radius: 4px;
    width: 160px;
    height: 32px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    

`