import { makeStyles } from '@material-ui/core/styles'
import Paper  from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box' 
export default () => {

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        form: {
            margin: theme.spacing(1),
            backgroundColor: '#263B65',
        }
    }))
}