import styled from 'styled-components';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    gap: 10px;

    font-weight: 500;
    font-size: 20px;
`;

export const Input = styled.input`
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #b5b5b5;
    width: 180px;
    :focus {
        outline: 0;
        box-shadow: 0 0 0 0.1rem rgba(158, 158, 158, 0.25);
        border: 2px solid #dc8553;
    }
`;