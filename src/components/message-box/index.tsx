import React from 'react';
import Loader from '../loader';
import { MessageBoxContainer, MessageBoxText } from './styles';
import { MessageBoxProps } from './types';

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
    return (
        <>
            {message ? (
                <MessageBoxContainer>
                    <Loader />
                    <MessageBoxText>{message}</MessageBoxText>
                </MessageBoxContainer>
                ) : null
            }
        </>
    )
};

export default MessageBox;
