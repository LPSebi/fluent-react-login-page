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
            <NextUIProvider theme={darkTheme} />

            <div className="loginContainer">
                <div className="loginCard">
                    <section>
                        <Input
                            bordered
                            labelPlaceholder={
                                <span style={{ color: 'white' }}>Email</span>
                            }
                        />
                        <Spacer y={1.5} />
                        <Input.Password
                            bordered
                            labelPlaceholder={
                                <span style={{ color: 'white' }}>Password</span>
                            }
                        />
                    </section>
                    <section className="loginFinishSection">
                        <Button shadow auto>
                            Login
                        </Button>
                    </section>
                </div>
            </div>
        </div>
    );
}
