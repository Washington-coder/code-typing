import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100vh;
`;

export const KeyboardContainer = styled.div<{
    isVisible: boolean;
}>`
    display: flex;
    flex-wrap: wrap;
    
    gap: 0.5rem;
    padding: 2rem;

    width: 100%;
    height: 350px;

    border-radius: 12px;
    background: var(--gray-100);

    position: absolute;
    bottom: ${props => props.isVisible ? 0 : -420}px;

    transition: 500ms;
`;

export const KeyboardContainerUp = styled.div`
    display: flex; 
    width: 100%;
    height: 20px;
    
    justify-content: center;
    align-items: center;

    margin-top: -60px; 

    span {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 70px; 
        padding: 0.5rem;

        cursor: pointer;
        border-radius: 10px 10px 0 0;

        background-color: var(--gray-100);
    }
`;

export const KeyboardLineContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 0.5rem;
    justify-content: center;
`;