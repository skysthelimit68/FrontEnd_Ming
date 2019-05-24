import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const styles = theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        },
        textField: {
          marginLeft: theme.spacing.unit,
          marginRight: theme.spacing.unit,
        },
        dense: {
          marginTop: 16,
        },
        menu: {
          width: 200,
        },
        button: {
            margin: theme.spacing.unit,
          },
          input: {
            display: 'none',
          },
      });


class FeaturedForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            newUser: true       
        }
    }

    /*
    componentDidMount() {
        this.setState({
            newUser : this.props.newUser
        })
    }
    */
    updateField = event => {
        event.preventDefault();
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const creds = {
            username : this.state.username,
            password : this.state.password
        }
        if(this.state.newUser) {
            this.props.signup(creds)

        } else {
            this.props.login(creds)
            
        }
    }

    handleToggle = status => {
        this.setState({
            newUser: status
        })
    }

    render(){
        const { classes } = this.props;
        const styleClass1 = this.state.newUser? "formTab" : "formTab formTabInactive";
        const styleClass2 = this.state.newUser? "formTab formTabInactive" : "formTab";
        return(
           <div className="featureForm-wrapper">
            <div className="formNav">
                <div className={styleClass1} onClick={ () => this.handleToggle(true)}>Signup</div>
                <div className={styleClass2} onClick={ () => this.handleToggle(false)}>Login</div>
            </div>
            <form onSubmit={this.handleSubmit} className={classes.container} noValidate autoComplete="off">
                
                <TextField
                    label="User Name"
                    className={`${classes.textField} form_input`}
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.updateField}
                    autoComplete="username"
                    margin="normal"
                    variant="outlined"
                />
                
                <TextField
                    label="Password"
                    className={`${classes.textField} form_input`}
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.updateField}
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
                    {this.state.newUser ? 
                        
                        <Button type="submit" variant="outlined" className={`${classes.button} form_button`}>Sign Me Up!</Button>
                        :
                       
                        <Button type="submit" variant="outlined" className={`${classes.button} form_button`}>Sign Me In!</Button>
                       
                        }       
            </form>
            </div>
        )
    }
    
}

export default withStyles(styles)(FeaturedForm);


/*
<Button type="submit" variant="outlined" className={`${classes.button} form_button`}>
                    {this.state.newUser? "Sign me up!" : "Sign me in!"}
                </Button>
*/

/*
                        <span onClick={ () => this.handleToggle(false)}>Login</span>
                        <span onClick={ () => this.handleToggle(true)}>Signup</span>

*/