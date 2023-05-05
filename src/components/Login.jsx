import {
    Button,
    Input,
    NextUIProvider,
    Spacer,
    createTheme,
} from '@nextui-org/react';

export function Login() {
    const darkTheme = createTheme({
        type: 'dark',
    });

    return (
        <div>
            <div className="loginContainer">
                <div className="loginCard">
                    <NextUIProvider theme={darkTheme} />
                    <Input
                        bordered
                        labelPlaceholder={
                            <span style={{ color: 'white' }}>Email</span>
                        }
                    />
                    <Spacer y={2} />
                    <Input.Password
                        bordered
                        labelPlaceholder={
                            <span style={{ color: 'white' }}>Password</span>
                        }
                    />
                    <Spacer y={7} />

                    <Button shadow auto>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}
