import React from  'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles} from '@material-ui/core/styles';

const useStyles=  makeStyles(
    {
        container: {
        backgroundImage: 'url(/casino1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width:'100%'
        },
        ccontainer: {
        width: 200,
        top: 100,
        left: 50,
        position: 'absolute',
        },
    }
    )
        

function List(props){
    const classes = useStyles();
    return (
        <div className={ classes.container}>
    <Grid container spacing={4} className={ classes.ccontainer}>
    {props.transfers.map(transfer => {
     return (
     <Grid item key={ transfer.id }>
        <Card>
        Username: {transfer.username}<br/>
        Money: {transfer.money}<br/>
        credit: {transfer.credit}<br/>
        </Card>
     </Grid>
    );
    })
}
</Grid>
</div>
)
}
export default List;