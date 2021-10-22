import React from "react";

import {
    Image,
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";

import FakeData from "../../pages/Home/HomeCarrocel/FakeData";
import DefaultColors from "../../assets/colors/DefaultColors";

export default function LittleCompaniesCarrousel({data, navigation}) {
    
    const [colors, setColors] = React.useState(DefaultColors["dark"]);

    const styles = StyleSheet.create({
        container: {
            paddingLeft: 20,
        },
        card: {
            marginRight: 20
        },
        title: {
            fontSize: 18,
            fontWeight: "bold",
            color: colors.textColor,
            flexShrink: 1,
            width: 100
        },
        distance: {
            fontSize: 12,
            color: colors.accent,
        },
        image: {
            width: 140,
            height: 200,
            borderRadius: 10,
            marginBottom: 10,
        }
    })

    return (
        <FlatList style={styles.container}
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => {
                        navigation.navigate('Company', { company: item })
                    }}>
                    <Image style={styles.image} source={{ uri: item.imageURL }} />
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.distance}>{`${item.distance / 1000} Km`}</Text>
                </TouchableOpacity>
            )}
        />
    )
}