import { Box, useTheme, Typography } from '@mui/material'
import Header from '../../components/Header'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { tokens } from '../../theme'

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant='h5'>
            An Important question 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit officia quos hic possimus earum debitis, eum cumque sapiente reprehenderit reiciendis, nemo architecto! Quidem repellendus officiis culpa magnam sunt vitae!
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant='h5'>
            An Important question 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit officia quos hic possimus earum debitis, eum cumque sapiente reprehenderit reiciendis, nemo architecto! Quidem repellendus officiis culpa magnam sunt vitae!
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant='h5'>
            An Important question 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit officia quos hic possimus earum debitis, eum cumque sapiente reprehenderit reiciendis, nemo architecto! Quidem repellendus officiis culpa magnam sunt vitae!
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.purpleAccent[500]} variant='h5'>
            An Important question 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sit officia quos hic possimus earum debitis, eum cumque sapiente reprehenderit reiciendis, nemo architecto! Quidem repellendus officiis culpa magnam sunt vitae!
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default FAQ;