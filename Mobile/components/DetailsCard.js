import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';


const DetailsCard = ({ title, details }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
            <Text style={{ fontSize: 17, fontWeight: '600', minWidth: 260, marginBottom: 15 }} >{title}</Text>
            <Text style={{ fontSize: 17, fontWeight: '600', width: 70, marginBottom: 10, color: 'white', textAlign: 'center', paddingVertical: 2, backgroundColor: 'black', borderRadius: 5 }}  >{details}</Text>
        </View>
    )
}

export default DetailsCard