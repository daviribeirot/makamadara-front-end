import Logo from "../assets/images/flocologo.png";
import { Box, Typography } from "@mui/material";

export default function LogoComponent() {
    return (
        <>
            <Box
                component="img"
                alt="logo"
                src={Logo}
                sx={{
                    width: 100,
                    heigth: 100,
                }}
            >
            </Box>
            <Typography
                variant="h1"
                sx={{
                    fontSize: 52,
                    fontWeight: 500,
                    color: "white",
                }}
            >
                MAKAMADARA
            </Typography>
        </>
    )
}