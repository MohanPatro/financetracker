import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './welcome.style';
import { SIZES } from '../../../constants';

const jobTypes = ["IRCTC"]; // Consider expanding this array as needed

const Welcome = () => {
    const router = useRouter();
    const [selectedJobType, setSelectedJobType] = useState(jobTypes[0]); // Default to first job type

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Welcome to Expan!</Text>
                <Text style={styles.welcomeMessage}>Track your Expenses here.</Text>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList 
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.tab(selectedJobType, item)}
                            onPress={() => {
                                setSelectedJobType(item);
                                router.push(`/search/${item}`);
                            }}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    horizontal
                />
            </View>
        </View>
    );
};

export default Welcome;
