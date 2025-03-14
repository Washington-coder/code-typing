import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;

    width: 100%;
    height: 100vh;

    main {
        display: flex;
        justify-content: space-between;
        align-content: flex-start;
        
        flex-wrap: wrap;
        
        gap: 0.5rem;
        padding: 2rem;

        width: 950px;
        height: 350px;

        border-radius: 12px;

        background: var(--gray-100);
    }
`;

export const KeyboardLineContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;