import { Container, Box, TextField, Typography, Button } from '@mui/material';
import StyledLink from "./StyledLink";
import LogoComponent from './LogoComponent';
import { useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { signIn } from '../services';
import { UserContext } from '../contexts/UserContext';

export default function SigninComponent() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
   
    async function handleSubmit(e){
        e.preventDefault();

        try {
            const userData = await signIn(email, password);
            setUser(userData);
            toast("Login realizado com sucesso!");
            navigate("/home");
        } catch (error) {
            console.log(error);
            toast("Não foi possível fazer o login!");
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
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>

                    <Box sx={{ mb: 1, p: 1 }}>
                        <StyledLink to="/signup">
                            <Typography variant="h7" color="white">Não possui cadastro? Cadastre-se aqui!</Typography>
                        </StyledLink>
                    </Box>

                </Box>
            </Container>
        </>
    )
}

