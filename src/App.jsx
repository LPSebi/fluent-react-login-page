import './style.css';

import { BackgroundImage } from './components/BackgroundImage';
import { Login } from './components/Login';
import { PageHeader } from './components/PageHeader';

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
