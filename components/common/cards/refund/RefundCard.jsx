import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RefundCard = ({ title, description, price, status }) => {
    return (
        <View style={styles.card}>
            <View style={styles.leftSection}>
                <Text style={styles.heading}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <View style={styles.rightSection}>
                <Text style={styles.status}>{status}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        padding: 15,
        margin: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftSection: {
        flex: 1,
        marginRight: 10,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212EA0',
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
    rightSection: {
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#28A745',
    },
    status: {
        fontSize: 14,
        color: '#FF5733',
    },
});

export default RefundCard;
