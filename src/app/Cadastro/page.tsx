import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';

export default function cadastro() {
    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const [cpf, setCpf] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleRegister = () => {
        if (!nome || !email || !senha || !cpf || !dataNascimento) {
            alert('Preencha todos os campos!');
            return;
        }
        console.log('Cadastro:', { nome, email, senha, cpf, dataNascimento });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Cadastro</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                value={nome}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="CPF"
                value={cpf}
                onChangeText={setCpf}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Data de Nascimento (DD/MM/AAAA)"
                value={dataNascimento}
                onChangeText={setDataNascimento}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}