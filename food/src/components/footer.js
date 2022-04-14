import { Box, Container,Grid } from "@material-ui/core";

export default function Footer(){
    return <footer>
                <Box>
                    <Container maxWidth ="lg">
                        <Grid container spacing={5}>
                            <Grid items></Grid>
                        </Grid>
                    </Container>
                </Box>
    </footer>
}