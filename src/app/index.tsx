import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './login';
import { Link } from 'expo-router';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password) {
            alert('Preencha todos os campos!');
            return;
        }

        console.log('Sua conta:', email, 
            'Sua senha', password);
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
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Link href={"/home/page"} asChild>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity></Link>
            <Link href={"/Cadastro/page"} asChild><TouchableOpacity>
                <Text style={styles.link}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity></Link>
        </View>
    );
}