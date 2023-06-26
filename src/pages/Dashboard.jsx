import { Box, Container, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import StyledLink from "../components/StyledLink";
import LogoComponent from "../components/LogoComponent";
import { AddHome, Chalet, HistoryToggleOff } from "@mui/icons-material";

export function Dashboard() {

    const listStyle = {color: "white", border: "1px solid white", marginBottom: "20px", borderRadius: "2px"}

    return (
        <>
            <Container component="main" maxWidth="xs"
                sx={{
                    bgcolor: "#0a1929",
                    borderRadius: 2,
                    height: "30em",
                }}>
                <Box sx={{
                    pt: 4,
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <LogoComponent/>

                    <List sx={{
                        marginTop: "30px",
                    }}>
                        <ListItem component={StyledLink} to="/enrollment" style={listStyle}>
                            <ListItemIcon>
                                <Chalet sx={{
                                    color: "white",
                                    fontSize: 30,
                                }}/>
                            </ListItemIcon>
                            <ListItemText primary="Inscrição"/>
                        </ListItem>
                        <ListItem component={StyledLink} to="/attendance" style={listStyle}>
                            <ListItemIcon>
                                <AddHome sx={{
                                    color: "white",
                                    fontSize: 30,
                                }}/>
                            </ListItemIcon>
                            <ListItemText primary="Novo atendimento" />
                        </ListItem>
                        <ListItem component={StyledLink} to="/historic" style={listStyle}>
                            <ListItemIcon>
                                <HistoryToggleOff sx={{
                                    color: "white",
                                    fontSize: 30,
                                }}/>
                            </ListItemIcon>
                            <ListItemText primary="Histórico" />
                        </ListItem>
                    </List>

                </Box>
            </Container>
        </>
    )
}
