import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import * as Google from 'expo-auth-session/providers/google';
import { useAuthRequest } from 'expo-auth-session';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // Google Sign-In configuration
    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '930322296073-cg3rrp13puhi0okqsdhl9pkdhgo4cmvp.apps.googleusercontent.com',
        redirectUri: 'com.vinay1025.financetracker:/oauth2redirect/google',
        scopes: ['profile', 'email'],
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { authentication } = response;
            // Handle successful authentication here (e.g., fetch user profile, tokens)
            console.log('Google Sign-In success:', authentication);
            router.push('/sign'); // Redirect to Home after successful Google login
        }
    }, [response]);

    const handleLogin = () => {
        if (!email || !password) {
            alert("Email and password are required!");
            return;
        }
        // Add your authentication logic here for email/password
        console.log('Logging in with:', email, password);
        router.push('/sign'); // Redirect to Home page after successful login
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
            
            <View style={styles.googleSignIn}>
                <Button
                    title="Sign in with Google"
                    disabled={!request}
                    onPress={() => promptAsync()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        borderRadius: 4,
    },
    googleSignIn: {
        marginTop: 20,
    },
});

export default Login;
