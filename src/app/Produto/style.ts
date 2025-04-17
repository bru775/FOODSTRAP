import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#fff",
    },
    image: {
        width: "95%",
        height: 150,
        borderRadius: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: "#555",
        marginBottom: 24,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
        color: "#007BFF",
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 16,
    },
  
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",

    },

})