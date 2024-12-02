import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Auth = ({ navigation }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: '',
    });

    const handleSubmit = () => {
        console.log(formData);
        navigation.navigate('HomeScreen');
    };

    return (
        <LinearGradient
            colors={['#f17f55', '#8046c3']}
            style={styles.container}
        >
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <FontAwesome name="map-marker" size={50} color="white" />
                        <Text style={styles.headerTitle}>Mint Go</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.toggleContainer}>
                            <TouchableOpacity
                                style={[styles.toggleButton, isLogin && styles.activeToggle]}
                                onPress={() => setIsLogin(true)}
                            >
                                <Text style={[styles.toggleText, isLogin && styles.activeToggleText]}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.toggleButton, !isLogin && styles.activeToggle]}
                                onPress={() => setIsLogin(false)}
                            >
                                <Text style={[styles.toggleText, !isLogin && styles.activeToggleText]}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                        {!isLogin && (
                            <View style={styles.inputContainer}>
                                <FontAwesome name="user" size={20} color="rgba(255,255,255,0.8)" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Full Name"
                                    placeholderTextColor="rgba(255,255,255,0.6)"
                                    value={formData.name}
                                    onChangeText={(text) => setFormData({ ...formData, name: text })}
                                />
                            </View>
                        )}

                        <View style={styles.inputContainer}>
                            <FontAwesome name="envelope" size={20} color="rgba(255,255,255,0.8)" />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="rgba(255,255,255,0.6)"
                                keyboardType="email-address"
                                value={formData.email}
                                onChangeText={(text) => setFormData({ ...formData, email: text })}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <FontAwesome name="lock" size={20} color="rgba(255,255,255,0.8)" />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="rgba(255,255,255,0.6)"
                                secureTextEntry
                                value={formData.password}
                                onChangeText={(text) => setFormData({ ...formData, password: text })}
                            />
                        </View>

                        {!isLogin && (
                            <View style={styles.inputContainer}>
                                <FontAwesome name="lock" size={20} color="rgba(255,255,255,0.8)" />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm Password"
                                    placeholderTextColor="rgba(255,255,255,0.6)"
                                    secureTextEntry
                                    value={formData.confirmPassword}
                                    onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
                                />
                            </View>
                        )}

                        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                            <Text style={styles.submitButtonText}>
                                {isLogin ? 'Login' : 'Sign Up'}
                            </Text>
                        </TouchableOpacity>

                        {isLogin && (
                            <TouchableOpacity style={styles.forgotPassword}>
                                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 20,
        padding: 20,
    },
    toggleContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        marginBottom: 20,
    },
    toggleButton: {
        flex: 1,
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    activeToggle: {
        backgroundColor: '#f17f55',
    },
    toggleText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        fontWeight: '600',
    },
    activeToggleText: {
        color: 'white',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    input: {
        flex: 1,
        color: 'white',
        padding: 15,
        marginLeft: 10,
    },
    submitButton: {
        backgroundColor: '#8046c3',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    },
    forgotPassword: {
        alignItems: 'center',
        marginTop: 15,
    },
    forgotPasswordText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14,
    },
});

export default Auth;