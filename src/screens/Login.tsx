
import React, { Component } from 'react'
import { SafeAreaView, Text, StatusBar, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';
import { Styles, Colors } from '../styles/index';
import { connect } from 'react-redux';
import { fetchLogin } from '../store/user/user.action';
import Button from '../components/Button';
import notify from '../utils/notify';

// State Types
interface State {
    username: String,
    password: String,
    loading: Boolean
}

class Login extends Component<State> {
    state = {
        username: '',
        password: '',
        loading: false
    }

    // Username Change Text Trigger
    usernameChangeText = (username: String) => {
        this.setState({ username });
    }

    // Password Change Text Trigger
    passwordChangeText = (password: String) => {
        this.setState({ password });
    }

    // Submit Login
    submit = () => {
        const { username, password } = this.state;

        // Check that the username and password are not empty
        if (username.trim() === '' || password.trim() === '') {
            notify('Please Enter Username and Password');
            return;
        }

        // Call Login Action
        this.props.login(username, password);
    }

    render() {
        const { username, password } = this.state;

        return (
            <SafeAreaView style={[Styles.container, Styles.justifyContentCenter, Styles.padding15]}>
                {/* Initialize Status bar */}
                <StatusBar barStyle='dark-content' backgroundColor='#fff' />

                {/* UserName Input */}
                <TextInput
                    style={Styles.textInput}
                    onChangeText={text => this.usernameChangeText(text)}
                    value={username}
                    placeholder='Enter Your Username'
                />

                {/* Password Input */}
                <TextInput
                    style={Styles.textInput}
                    onChangeText={text => this.passwordChangeText(text)}
                    value={password}
                    placeholder='Enter Your Password'
                    secureTextEntry={true}
                />

                {/* Submit Button */}
                <Button text='login' color={Colors.PRIMARY} onPress={this.submit} />
            </SafeAreaView>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(fetchLogin(username, password))
});

export default connect(null, mapDispatchToProps)(Login);
