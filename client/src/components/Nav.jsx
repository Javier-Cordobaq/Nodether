import { useState } from 'react'
import { PrivateRoutes } from '../Guards';
import { LayoutNav, Section, StyledLink } from '../styled-components/Nav.styled'

const Nav = () => {

    const [size, setSize] = useState(false);

    const name = 'Javier C'

    return (
        <LayoutNav size={size.toString()}>
            <Section arrows={'arrows'} size={size.toString()}>
                <p>{name}</p>
                {size === false ?
                    <span id='arrows' onClick={() => setSize(!size)} className="material-symbols-outlined">
                        keyboard_double_arrow_left
                    </span>
                    :
                    <span id='arrows' onClick={() => setSize(!size)} className="material-symbols-outlined">
                        keyboard_double_arrow_right
                    </span>
                }
                <span id='hamburguer' className="material-symbols-outlined">
                    menu
                </span>
            </Section>
            <StyledLink to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.HOME}`}>
                <Section size={size.toString()}>
                    <span className="material-symbols-outlined">
                        smart_toy
                    </span>
                    <p>Bot</p>
                </Section>
            </StyledLink>
            <StyledLink to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.DASHBOARD}`}>
                <Section size={size.toString()}>
                    <span className="material-symbols-outlined">
                        settings
                    </span>
                    <p>Settings</p>
                </Section>
            </StyledLink>
            <Section size={size.toString()}>
                <span className="material-symbols-outlined">
                    logout
                </span>
                <p>Log Out</p>
            </Section>
        </LayoutNav>
    )
}

export default Nav