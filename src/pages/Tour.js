import { Typography } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import ImageLists from "../components/ImageLists"


const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Immerse into the Falls
    </Typography>

    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://www.walli.co.il/wp-content/uploads/2023/04/23180-copy-900x900.jpg"
        alt="my"
        height={325}
      />
      <ImageLists />
    </Box>
    <Typography variant="h6" component="h4" marginTop={3}>
      About this ticket
    </Typography>
    <Box sx={{ display: "flex" }}>
      <Typography variant="paragraph" component="p" marginY={3}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit voluptates
        rem quos delectus debitis earum modi, ipsum veritatis. Perferendis
        officiis nobis, aut hic praesentium nulla vero, possimus omnis
        reprehenderit blanditiis quis incidunt minima voluptatibus illum quam
        corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Exercitationem officiis commodi beatae
        animi incidunt necessitatibus aut provident ad ex. Saepe!
      </Typography>
    </Box>
    <Typography variant="h6" component="h4" marginBottom={3}>
      Frequently Asked Questions
    </Typography>
  </Container>
)

export default Tour
