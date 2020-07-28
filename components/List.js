import React from "react";
import {
    FlatList,
    Text,
    View,
    Button,
    StyleSheet,
    Dimensions,
} from "react-native";

export default ({ points, closeModal }) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList
                    data={points.map((item) => item.name)}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item}
                ></FlatList>
            </View>
            <View style={styles.button}>
                <Button title="Cerrar" onPress={closeModal}></Button>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingBottom: 15,
    },
    list: {
        height: Dimensions.get("window").height - 250,
    },
    item: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        height: 50,
        justifyContent: "center",
        padding: 15,
    },
});
