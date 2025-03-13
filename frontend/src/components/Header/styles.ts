import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;

    padding: 2rem;
`

export const RightSideContainer = styled.div`
    display: flex;
    gap: 1rem;
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 2px solid var(--gray-200);
    border-radius: 12px;
    padding: 0.7rem;

    cursor: pointer;
    transition: all 0.2s;

    &:hover {
        background-color: var(--gray-200);
    }
`