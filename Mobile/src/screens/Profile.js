import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import DetailsCard from '../components/DetailsCard';

const Profile = ({ navigation }) => {
    const userData = {
        name: "Ananda Krishna",
        email: "ananda@gmail.com",
        tokens: 1250,
        rank: 5,
        stepsNow: 2435,
        stepsLast24h: 8976,
    };

    return (
        <LinearGradient
            colors={['#f17f55', '#8046c3']}
            style={styles.container}
        >
            <ScrollView style={styles.scrollView}>
                <View style={styles.profileHeader}>
                    <View style={styles.profileImageContainer}>
                        <Image
                            source={{ uri: 'https://via.placeholder.com/150' }}
                            style={styles.profileImage}
                        />
                        <TouchableOpacity style={styles.editButton}>
                            <FontAwesome name="pencil" size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.name}>{userData.name}</Text>
                    <Text style={styles.email}>{userData.email}</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statsRow}>
                        <View style={styles.statCard}>
                            <Text style={styles.statValue}>{userData.tokens}</Text>
                            <Text style={styles.statLabel}>Tokens</Text>
                        </View>
                        <View style={styles.statCard}>
                            <Text style={styles.statValue}>#{userData.rank}</Text>
                            <Text style={styles.statLabel}>Rank</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.detailsContainer}>
                    <DetailsCard
                        title="Current Steps"
                        details={userData.stepsNow}
                    />
                    <DetailsCard
                        title="Last 24 Hours"
                        details={userData.stepsLast24h}
                    />
                </View>

                <View style={styles.leaderboardContainer}>
                    <Text style={styles.sectionTitle}>Leaderboard</Text>
                    {[1, 2, 3].map((pos) => (
                        <View key={pos} style={styles.leaderboardItem}>
                            <Text style={styles.position}>{pos}</Text>
                            <View style={styles.userInfo}>
                                <Text style={styles.userName}>User {pos}</Text>
                                <Text style={styles.userSteps}>12,345 steps</Text>
                            </View>
                        </View>
                    ))}
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Auth')} style={styles.logoutButton}>
                    <FontAwesome name="sign-out" size={20} color="white" style={styles.logoutIcon} />
                    <Text style={styles.logoutText}>Log Out</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        padding: 20,
    },
    profileHeader: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30,
    },
    profileImageContainer: {
        position: 'relative',
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: 'white',
    },
    editButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#8046c3',
        padding: 8,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15,
    },
    email: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 5,
    },
    statsContainer: {
        marginBottom: 30,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 15,
        padding: 20,
        width: '45%',
        alignItems: 'center',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    statLabel: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        marginTop: 5,
    },
    detailsContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 30,
    },
    leaderboardContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
    },
    leaderboardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 15,
        borderRadius: 10,
    },
    position: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        width: 30,
    },
    userInfo: {
        marginLeft: 15,
    },
    userName: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
    },
    userSteps: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.8)',
    },
    logoutButton: {
        flexDirection: 'row',
        backgroundColor: '#f17f55',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
    },
    logoutIcon: {
        marginRight: 10,
    },
    logoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
});

export default Profile;