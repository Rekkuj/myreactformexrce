import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'

class Confirm extends Component {
    continue = e => {
        e.preventDefault();
            // TODO: Process data
        const { values: {firstName, lastName, email, occupation, city, bio } } = this.props;

        console.log(this.props.values);
        download("text.txt", this.props.values);
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio } } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                        <List>
                            <ListItem
                                primaryText="First Name"
                                secondaryText={ firstName }
                            />
                            <ListItem
                                primaryText="Last Name"
                                secondaryText={ lastName }
                            />
                            <ListItem
                                primaryText="email"
                                secondaryText={ email }
                            />
                            <ListItem
                                primaryText="Occupation"
                                secondaryText={ occupation }
                            />
                            <ListItem
                                primaryText="City"
                                secondaryText={ city }
                            />
                            <ListItem
                                primaryText="Bio"
                                secondaryText={ bio }
                            />
                        </List>
                    <br/>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

function download(filename, text){
    var blob = new Blob([text], {type: "application/json"});
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
}



export default Confirm;