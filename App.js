import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Button, View, Text, Dimensions } from "react-native";
import { Map, Modal, Panel, Input, List } from "./components";

export default function App() {
    const [points, setPoints] = useState([]);
    const [pointTemp, setPointTemp] = useState({});
    const [name, setName] = useState("");
    const [visibilityFilter, setVisibilityFilter] = useState("new_point");
    const [visibility, setVisibility] = useState(false);
    const [pointsFilter, setPointsFilter] = useState(true);

    const togglePointsFilter = () => setPointsFilter(!pointsFilter);

    const handleLongPress = ({ nativeEvent }) => {
        setVisibilityFilter("new_point");
        setPointTemp(nativeEvent.coordinate);
        setVisibility(true);
    };

    const handleChangeText = (text) => {
        setName(text);
    };

    const handleSubmit = () => {
        const newPoint = { coordinate: pointTemp, name };
        setPoints(points.concat(newPoint));
        setVisibility(false);
        setName("");
    };

    const handleList = () => {
        setVisibilityFilter("all_points");
        setVisibility(true);
    };

    return (
        <View style={styles.container}>
            <Map
                onLongPress={handleLongPress}
                points={points}
                pointsFilter={pointsFilter}
            />
            <Modal visibility={visibility}>
                {visibilityFilter === "new_point" ? (
                    <View style={styles.form}>
                        <Input
                            title="Nombre"
                            placeholder="Nombre del punto"
                            onChangeText={handleChangeText}
                        />
                        <Button title="Aceptar" onPress={handleSubmit}></Button>
                    </View>
                ) : (
                    <List
                        points={points}
                        closeModal={() => setVisibility(false)}
                    />
                )}
            </Modal>
            <Panel
                onPressLeft={handleList}
                textLeft="Lista"
                togglePointsFilter={togglePointsFilter}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        padding: 15,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
    },
});
