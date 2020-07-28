import React, { Children } from "react";
import { StyleSheet, Text, View, Dimensions, Modal } from "react-native";

export default ({ children, visibility }) => {
    return (
        <Modal animationType="slide" transparent={true} visible={visibility}>
            <View style={styles.center}>
                <View style={styles.modalView}>{children}</View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
    },
    modalView: {
        minWidth: Dimensions.get("window").width - 40,
        backgroundColor: "#fff",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
});
