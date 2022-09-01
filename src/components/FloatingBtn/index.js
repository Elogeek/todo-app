import React from "react";
import {Pressable, StyleSheet, Text} from "react-native";

export default function FloatingBtn({toggle, isOpen}) {
    return(
        <Pressable onPress={toggle} style={styles.btn}>
            <Text style={styles.txt}>{isOpen ? "x" : "+"}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    btn: {
        position: "absolute",
        right: 20,
        bottom: 20,
        width: 40,
        height: 40,
        justifyContent: "center",
        backgroundColor: "orange",
        borderRadius: 40
    },
    txt: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})