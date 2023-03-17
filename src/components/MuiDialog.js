import React, {useState} from 'react';
import { Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions } from '@mui/material'

function MuiDialog()
{
    const [openFlag, setOpenFlag]  = useState(false)
    return (
        <>
            <Button onClick={() => setOpenFlag(true)}>Open Dialog</Button>
            <Dialog
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'
                open={openFlag}
                onClose={() => setOpenFlag(false)}>
                <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id='dialog-description'>
                        Are you sure you want to submit the test? You will not be able to edit after submitting.
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={() => setOpenFlag(false)}>Cancel</Button>
                        <Button autoFocus onClick={() => setOpenFlag(false)}>Submit</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default MuiDialog;
