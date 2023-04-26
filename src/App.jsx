import './style.css';
import ReactLogo from './assets/react.svg';
import { BackgroundImage } from './components/BackgroundImage';
import { Login } from './components/Login';
// import { Login } from './components/Login';

export function PageHeader() {
    return (
        <header className="header">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7.5px',
                }}>
                <img src={ReactLogo} alt="React Logo" className="svg" />
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

export default function App() {
    return (
        <>
            <BackgroundImage>
                <PageHeader></PageHeader>
                <Login></Login>
            </BackgroundImage>
        </>
    );
}
