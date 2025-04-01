import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { styles } from "./style"
 
export default function Index() {
    const MENU = [
        {
            id: 1,
            name: "Fraldinha",
            description: "4 fraldinhas bem feitas",
            price: 139.90,
            image: require("../../assets/images/Fraldinha.jpg")
        },
        {
            id: 2,
            name: "Carne de porco",
            description: "Carne de porco com mistura",
            price: 49.90,
            image: require("../../assets/images/carneporco.jpg")
        },
        {
            id: 3,
            name: "Colxão mole",
            description: "Colxão mole recheado",
            price: 34.90,
            image: require("../../assets/images/colxãomole.jpg")
        }
    ]
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("../../assets/images/lugar.png")} />
                <Text style={styles.restaurantName}>FOODSTRAP</Text>
                <Text style={styles.subtitle}>Um restaurante de tudo um pouco</Text>
            </View>
 
            <View style={styles.tabs}>
                {["Pratos", "Lanches", "Fritas", "Bebidas"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
 
            <ScrollView>
                {
                    MENU.map((item) => (
                        <TouchableOpacity style={styles.menuItem}>
                            <View style={styles.menuContent}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemDescription}>{item.description}</Text>
                                <Text style={styles.itemPrice}>R$ {item.price}</Text>
                            </View>
                            <Image style={styles.itemImage} source={item.image} />
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
 
 
    )
}