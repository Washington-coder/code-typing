import styled from "styled-components";

export const KeyboardItemContainer = styled.div<{
    width: number,
    height: number,
    labelPosition: string
}>`
    display: flex;
    align-items: center;
    justify-content: ${props => props.labelPosition};

    padding: 0.5rem;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    border-radius: 10px;

    background: var(--black-100);
`