import React from "react"
import Paper from "@mui/material/Paper"
import { Box, Grid2, Rating, ThemeProvider, createTheme } from "@mui/material"
import Typography from "@mui/material/Typography"
import { AccessTime } from "@mui/icons-material"
import { Link } from "react-router-dom"

function TourCard({ tour }) {
  const theme = createTheme({
    components: {
      MuiTypography: {
        variants: [
          {
            props: {
              variant: "body2",
            },
            style: {
              fontSize: 11,
            },
          },
          {
            props: {
              variant: "body3",
            },
            style: {
              fontSize: 9,
            },
          },
        ],
      },
    },
  })

  return (
    <Grid2 size={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={24}>
          <Link to={`${tour.id}`}>
            <img className="img" src={tour.image} alt="chana" />
          </Link>

          <Box padding={1}>
            <Typography variant="subtitle1" component="h2">
              {tour.name}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
              marginTop={2}
            >
              <Rating
                name="read-only"
                value={tour.reting}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={0.5}>
                {tour.reting}
              </Typography>
              <Typography variant="body3" component="p" marginLeft={0.5}>
                {tour.numberOfReviews}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography variant="h6" component="h2" marginTop={0}>
                From C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid2>
  )
}

export default TourCard
