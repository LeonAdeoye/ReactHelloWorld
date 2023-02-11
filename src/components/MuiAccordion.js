import React, {useState} from 'react';
import {Stack, Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function MuiAccordion()
{
    const [expanded, setExpanded] = useState(false);
    const handleChange = (isExpanded, panel) =>
    {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <Stack>
            <Accordion expanded={ expanded === 'panel1'} onChange={(isExpanded => handleChange(isExpanded, 'panel1'))}>
                <AccordionSummary id='panel-1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon/>}><Typography>Accordion 1</Typography> </AccordionSummary>
                <AccordionDetails><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography></AccordionDetails>
            </Accordion>
            <Accordion expanded={ expanded === 'panel2'} onChange={(isExpanded => handleChange(isExpanded, 'panel2'))}>
                <AccordionSummary id='panel-2-header' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon/>}><Typography>Accordion 2</Typography> </AccordionSummary>
                <AccordionDetails><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography></AccordionDetails>
            </Accordion>
            <Accordion expanded={ expanded === 'panel3'} onChange={(isExpanded => handleChange(isExpanded, 'panel3'))}>
                <AccordionSummary id='panel-3-header' aria-controls='panel3-content' expandIcon={<ExpandMoreIcon/>}><Typography>Accordion 3</Typography> </AccordionSummary>
                <AccordionDetails><Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography></AccordionDetails>
            </Accordion>
        </Stack>
    );
}

export default MuiAccordion;
