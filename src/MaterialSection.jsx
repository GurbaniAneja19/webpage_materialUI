import { Card, CardContent, Typography, Grid } from "@mui/material";

const MaterialSection = () => (
  <section id="material" style={{ padding: "4rem 1rem", background: "#f0f0f0" }}>
    <Typography variant="h4" align="center" gutterBottom>
      Material UI Section
    </Typography>
    <Grid container spacing={3} justifyContent="center">
      {[
        { title: "MUI Cards", desc: "Clean and modern UI components." },
        { title: "Grid System", desc: "Responsive layout using MUI Grid." },
        { title: "Theme Ready", desc: "Easy to customize themes." },
      ].map(({ title, desc }) => (
        <Grid item xs={12} md={4} key={title}>
          <Card>
            <CardContent>
              <Typography variant="h6">{title}</Typography>
              <Typography variant="body2">{desc}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </section>
);

export default MaterialSection;
