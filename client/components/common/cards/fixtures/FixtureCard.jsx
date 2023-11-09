import { View, Text, TouchableOpacity,Image } from 'react-native'
import { icons } from '../../../../constants';
import styles from './fixturecard.style'
import { useNavigation } from '@react-navigation/native';


export default function FixtureCard({ fixture, navigaiton }) {

    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('FixturePage')}>
            <Image
                source = {icons.championsleagueicon}
                resizeMode = "contain"
                style={styles.imgSize("40%")}
            />
            <View style = {styles.textContainer}>
                <Text style = {styles.textHome}>
                    {fixture.home_team.team_name}
                </Text>
                <Text style = {styles.textAway}>
                    {fixture.away_team.team_name}
                </Text>
                <Text style = {styles.textDate}>
                    {fixture.time}
                </Text>
            </View>
        </TouchableOpacity>
    )
}