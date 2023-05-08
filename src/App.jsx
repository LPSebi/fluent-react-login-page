import './style.css';

import { BackgroundImage } from './components/BackgroundImage';
import { Login } from './components/Login';
import { PageHeader } from './components/PageHeader';
import { NextUIProvider, createTheme } from '@nextui-org/react';

export default function App() {
    const darkTheme = createTheme({
        type: 'dark',
        theme: {
            colors: {
                primary: '$white',
                primarySolidHover: '$gray900',
                primaryShadow: '$accents9',
                accents2: '$white',
            },
        },
    });

    return (
        <>
            <NextUIProvider theme={darkTheme}>
                <BackgroundImage>
                    <PageHeader />
                    <Login />
                </BackgroundImage>
            </NextUIProvider>
        </>
    );
}
