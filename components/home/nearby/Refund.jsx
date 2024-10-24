import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './refund.style';
import { COLORS } from '../../../constants';
import RefundCard from '../../common/cards/RefundCard'; // Ensure correct path
import useFetch from '../../../hook/useFetch';

const Refund = () => {
    const isLoading = false; // Replace with actual loading state
    const error = false; // Replace with actual error state

    // Sample job data
    const jobs = [
        {
            id: 1,
            title: '#PNR9765643456734',
            description: 'Nuzvid - Vijayawada',
            price: 'Rs120',
            status: '*',
        },
        {
            id: 2,
            title: '#PNR9766568965668',
            description: 'Vijawada - Lingampally.',
            price: 'Rs1000',
            status: '*',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Refunds</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardsContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color={COLORS.primary} />
                ) : error ? (
                    <Text>Something Went Wrong.</Text>
                ) : (
                    jobs.map(job => (
                        <RefundCard 
                            key={job.id}
                            title={job.title}
                            description={job.description}
                            price={job.price}
                            status={job.status}
                        />
                    ))
                )}
            </View>
        </View>
    );
};

export default Refund;
