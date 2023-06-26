import { Box, Container, List, ListItem, ListItemText, ListSubheader, Typography } from "@mui/material";
import LogoComponent from "./LogoComponent";
import { useEffect, useState } from "react";
import StyledLink from "./StyledLink";
import { getUserHistory } from "../services";
import { toast } from "react-toastify";
import useToken from "../hooks/useToken";

export default function HistoricComponent() {

    const token = useToken();
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
    const [attendance, setAttendance] = useState([]);

    const styles = {
        container: {
            backgroundColor: '#ffffff',
            overflowY: 'auto',
            maxHeight: '300px',
        },
    };


    useEffect(() => {
        async function getHistory() {
            try {
                const request = await getUserHistory(config);
                setAttendance(request)
            } catch (error) {
                console.log(error.response.data.message);
                toast.error("Ocorreu algum problema ao carregar seu histórico");
            }
        }

        getHistory();
    }, []);

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

                    <Box sx={{ mt: 2, mb: 2 }} style={styles.container}>
                        <List subheader={
                            <ListSubheader sx={{ fontSize: 20, fontWeight: 700 }}>
                                Histórico de Atendimentos
                            </ListSubheader>
                        }>
                            {attendance.length === 0 ? (
                                <Typography>Você ainda não realizou nenhum atendimento!</Typography>
                            ) : (
                                attendance.map((item) => (
                                    <ListItem key={item.id} sx={{ bgcolor: "#F5F5F5" }}>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={item.description}
                                        />
                                    </ListItem>
                                ))
                            )}
                        </List>
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