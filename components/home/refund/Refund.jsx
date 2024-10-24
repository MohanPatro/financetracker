import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './refund.style';
import { COLORS, SIZES } from '../../../constants';
import NearbyJobCard from '../../common/cards/refund/RefundCard';
import useFetch from '../../../hook/useFetch';

const Refund = () => {
  const router = useRouter();
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
            <NearbyJobCard 
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
