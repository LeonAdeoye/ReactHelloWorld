import React from 'react';
import {Grid, Box} from '@mui/material'
import './Cards.css'

function Cards()
{
    // could not get this to work as it still truncates the text after the CSS' --max-line variable is reached.
    // I have kept this to show that I have tried to implement this and there are other interesting features: transparency and limit the height of the box.
    // To see this example on YouTube, search for "How to limit lines of text with CSS only" by Web Dev Simplified.
    return (
        <Grid container my={0} rowSpacing={0} columnSpacing={4}>
            <Grid item xs={4} sm={4}>
                <Box borderColor="primary.main" border={1} p={2}><p className="cut-off">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><input type="checkbox" className="expand-btn" /></Box>

            </Grid>
            <Grid item xs={4} sm={4}>
                <Box borderColor="primary.main" border={1} p={2}><p className="cut-off">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p><input type="checkbox" className="expand-btn" /></Box>
            </Grid>
            <Grid item xs={4} sm={4}>
                <Box borderColor="primary.main" border={1} p={2}><p className="cut-off">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p><input type="checkbox" className="expand-btn" /></Box>
            </Grid>
        </Grid>
    );
}

export default Cards;
