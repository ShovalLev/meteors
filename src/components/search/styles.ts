import DatePicker from 'react-date-picker';
import styled from 'styled-components';

export const SerachBoxContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const SearchBox = styled.div`
    display: flex;
    border: 1px solid white;
    border-radius: 7px;
    padding: 10px 15px;
    min-width: 450px;
    background-color: white;
`;

export const StyledDatePicker = styled(DatePicker)`
    & > div {
        border-radius: 5px;
        background: white;
        padding: 4px 8px;        
    }    
`;

export const TextSearchInput = styled.input`
    border: none;
    border-radius: 5px;
    width: 100%;
    margin-right: 5px;
    font-size: 18px;
    cursor: ${(p) => p.disabled ? 'not-allowed' : 'auto'};

    &:focus-visible {
        outline: none;
    }
`;
