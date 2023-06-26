import { Box, Button, Container, TextField, Typography } from "@mui/material";
import StyledLink from "./StyledLink";
import LogoComponent from "./LogoComponent";
import { useState } from "react";
import { useNavigate } from "react-router";
import { createAttendance } from "../services";
import { toast } from "react-toastify";
import useToken from "../hooks/useToken";

export default function AttendanceComponent() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const navigate = useNavigate();
    const token = useToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    async function handleSubmit(e){
        e.preventDefault();

        try {
            await createAttendance(name, description, config);
            toast.success("Atendimento criado com sucesso!");
            navigate("/dashboard");
        } catch (error) {
                console.log(error);
                toast.error("Algo deu errado na criação do atendimento. Lembre-se de preencher todos os campos!");
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
                            id="nome"
                            label="Seu nome"
                            name="nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            autoComplete="nome"
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
                            name="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            label="Descrição do seu problema"
                            multiline
                            rows={4}
                            type="text"
                            id="text"
                            autoComplete="description"
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
                            Marcar atendimento
                        </Button>
                    </Box>

                    <Box sx={{ mb: 1, p: 1 }}>
                        <StyledLink to="/dashboard">
                            <Typography variant="h7" color="white">Voltar para a página principal!</Typography>
                        </StyledLink>
                    </Box>

                </Box>
            </Container>
        </>
    )
}