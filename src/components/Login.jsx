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
        darkTheme: {
            colors: {
                primary: 'red',
            },
        },
    });

    return (
        <div>
            <div className="loginContainer">
                <div className="loginCard">
                    <NextUIProvider theme={darkTheme} />
                    <Input
                        clearable
                        // underlined
                        bordered
                        labelPlaceholder="Email"
                        css={{
                            placeholder: { color: 'white' },
                        }}
                    />
                    <Spacer y={2} />
                    <Input.Password
                        clearable
                        // underlined
                        bordered
                        labelPlaceholder="Password"
                        css={{
                            accents6: { color: 'white' },
                        }}
                        status="default"
                    />
                    <Spacer y={2} />

                    <Button shadow auto>
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
}
