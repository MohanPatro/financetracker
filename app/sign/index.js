import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { images, icons, COLORS, SIZES } from '../../constants';
import { Refund, ScreenHeaderBtn, Welcome } from '../../components';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            {/* You do NOT need Stack.Screen here */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                <Text style={{ marginLeft: 10, fontSize: 18, color: COLORS.primary }}>EXPAN</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, padding: SIZES.medium, marginHorizontal: 10 }}>
                    <Welcome />
                    <Refund />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
