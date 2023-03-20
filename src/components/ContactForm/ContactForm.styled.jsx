import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    padding: 10px;
    width: 400px
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 180px;
    gap: 10px;

    font-weight: 500;
    font-size: 20px;
`;

export const Btn = styled.button`
    width: 100px;
    padding: 2px;
    border-radius: 4px;
    border: 1px solid #b5b5b5;
    :hover {
        background-color: #ff975b;
        border: 1px solid #b96a3c;
    }
`;

export const Input = styled.input`
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #b5b5b5;
    :focus {
        outline: 0;
        box-shadow: 0 0 0 0.1rem rgba(158, 158, 158, 0.25);
        border: 2px solid #dc8553;
    }
`;