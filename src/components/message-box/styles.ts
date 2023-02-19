import styled from 'styled-components';

export const MessageBoxContainer = styled.div`
    z-index: 100;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #bbbbbe5c;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MessageBoxText = styled.span`
    font-size: 22px;
    margin: 20px;
    color: white;
    font-weight: 600;
`;
