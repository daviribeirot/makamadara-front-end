import { Box, Button, Container, TextField } from "@mui/material";
import LogoComponent from "./LogoComponent";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { signUp } from "../services";

export default function SignupComponent() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast("As senhas devem ser iguais!");
        } else {
            try {
                await signUp(email, password);
                toast("Cadastro realizado com sucesso!");
                navigate("/");
            } catch (error) {
                toast("Não foi possível fazer o cadastro!");
            }
        }
    }

    return (
        <>
            <Container component="main" maxWidth="xs"
                sx={{
                    bgcolor: "#0a1929",
                    borderRadius: 2,
                }}>
                <Box sx={{
                    pt: 4,
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <LogoComponent />

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            autoComplete="email"
                            autoFocus
                            color="primary"
                            sx={{
                                borderRadius: 1,
                                '& input': {
                                    color: "white",
                                },
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color="primary"
                            sx={{ borderRadius: 1, }}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            label="Confirm Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color="primary"
                            sx={{ borderRadius: 1, }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </>
    )
}