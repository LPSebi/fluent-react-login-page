import { Tooltip } from '@nextui-org/react';
import ReactLogo from '.././assets/react.svg';

export function PageHeader() {
    return (
        <header className="header">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7.5px',
                }}>
                <Tooltip placement="bottom" content={'Devs ♥️ React'}>
                    <img src={ReactLogo} alt="React Logo" className="svg" />
                </Tooltip>
                <a href="/" className="headerText">
                    React Login
                </a>
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: 'var(--header-gap)',
                    alignItems: 'center',
                }}>
                <a href="/about" className="headerTextDesc">
                    About
                </a>
                <a href="/contact" className="headerTextDesc">
                    Contact
                </a>
            </div>
        </header>
    );
}
