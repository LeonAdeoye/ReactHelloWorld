import React, {useState} from 'react';
import {Stack, Autocomplete, TextField} from '@mui/material'

function MuiAutocomplete()
{
    const skills = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'React', 'Angular', 'Blazor', 'Python', 'Java'];
    const peopleSkills = skills.map((skill, index) => ({id: index+1, label: skill}));
    console.log(peopleSkills);
    const [skill, setSkill]  = useState('React');
    const [personSkill, setPersonSkill]  = useState(null);
    console.log(skill);
    console.log(personSkill);
    return (
        <>
            <Stack  spacing={2} width='250px' m={1}>
                <Autocomplete size='small'
                              renderInput={(params) => <TextField {...params} label='skills' />}
                              options={skills}
                              value={skill}
                              onChange={(event, newValue) => setSkill(newValue)}
                              freeSolo
                />
            </Stack>
            <Stack  spacing={2} width='250px' m={1}>
                <Autocomplete size='small'
                              renderInput={(params) => <TextField {...params} label='People skill' />}
                              options={peopleSkills}
                              value={personSkill}
                              onChange={(event, newValue) => setPersonSkill(newValue)}
                              freeSolo
                />
            </Stack>
        </>

    );
}

export default MuiAutocomplete;
