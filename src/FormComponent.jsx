import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from '@material-ui/pickers';
import './formComponent.css'

class FormComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            birthday: new Date(),
            age: "",
            hobby: ""
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this)
        this.handleLastNameChange = this.handleLastNameChange.bind(this)
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)

    }
    handleFirstNameChange = (e) => {
        this.setState({
            firstname: e.target.value
        })
        console.log(this.state)
    }
    handleLastNameChange = (e) => {
        this.setState({
            lastname: e.target.value
        })
    }
    handleAgeChange = (e) => {
        this.setState({
            age: e.target.value
        })
    }
    handleHobbyChange = (e) => {
        this.setState({
            hobby: e.target.value
        })
    }
    handleDateChange = (e) => {
        this.setState({
            birthday: e
        })
    }
    onFormSubmit = (e) => {
        e.preventDefault()   
        this.setState({
            firstname: "",
            lastname: "",
            birthday: new Date(),
            age: "",
            hobby: ""
        })
    }
    render(){
        return(
            <div className="form-group">
                <form onSubmit={this.onFormSubmit}>
                    <FormGroup>
                    <TextField 
                        id="standard-required"
                        label="First Name"
                        className="input-field"
                        value={this.state.firstname}
                        onChange={this.handleFirstNameChange}
                    />
                    <br />
                    <TextField 
                        id="standard-required"
                        label="Last Name"
                        className="input-field"
                        value={this.state.lastname}
                        onChange={this.handleLastNameChange}
                    />
                    <br />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-inline"
                        label="birthday"
                        format="MM/dd/yyyy"
                        value={this.state.birthday}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        
                    />
                    </MuiPickersUtilsProvider>
                    <br />
                    <TextField 
                        id="standard-required"
                        label="Age"
                        className="input-field"
                        value={this.state.age}
                        onChange={this.handleAgeChange}
                    />
                    <br />
                    <TextField 
                        id="standard-required"
                        label="Hobby"
                        className="input-field"
                        value={this.state.hobby}
                        onChange={this.handleHobbyChange}
                    />
                    <br />
                    <Button variant="contained" color="primary" component="button" type="submit"> 
                        Submit
                    </Button>
                    </FormGroup>  
                </form>
            </div>
        )
    }
}
export default FormComponent;