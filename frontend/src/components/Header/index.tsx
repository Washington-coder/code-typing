import { Link } from 'react-router-dom';
import {
    HeaderContainer,
    RightSideContainer,
    IconContainer
} from './styles'

import {
    FaMoon,
    FaGithub,
    FaUser
} from "react-icons/fa";

export function Header() {
    return (
        <HeaderContainer>
            <Link to="/about">
                About Code Typing
            </Link>

            <RightSideContainer>
                <IconContainer>
                    <FaMoon size={20} />
                </IconContainer>
                <a
                    href='https://github.com/Washington-coder/code-typing'
                    target='_blank'
                    rel="noopener noreferrer"
                >
                    <IconContainer>
                        <FaGithub size={20} />
                    </IconContainer>
                </a>
                <Link to="/profile">
                    <IconContainer>
                        <FaUser size={20} />
                    </IconContainer>
                </Link>
            </RightSideContainer>
        </HeaderContainer>
    )
}