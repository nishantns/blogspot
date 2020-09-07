import React from "react";
import { TextField, makeStyles, InputAdornment } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    
}));

const STSearchBox = (props) => {
    const classes = useStyles();
    return (
        <TextField
            variant="outlined"
            InputProps={{
                classes: {
                    root: {
                        '& fieldset': {
                            borderColor: 'red',
                        },
                        '&:hover fieldset': {
                            borderColor: 'yellow',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: 'green',
                        }
                    }
                },
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon/>
                    </InputAdornment>
                )
            }}
            placeholder={"Search the blog..."}
        />
    );
}

export default STSearchBox;