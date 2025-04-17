import { Text } from "react-native";
import { View, Image,  } from "react-native";
import { styles } from "./style";

export default function Produtopage() {
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={require("@/src/assets/images/carneporco.jpg")}></Image>
   
        <Text style={styles.title}>Melhor prato de carne de porco da cidade!</Text>
        <Text style={styles.description}>
        Carne de porco com salada de alface e repolho , e  arroz </Text>
        <Text style={styles.price}>R$ 49.90</Text>
        <Text style={styles.description}>
        Adicione ao carrinho e aproveite essa delicia!</Text>
        <View style={styles.button}>
            <Text style={styles.buttonText}>Adicionar ao carrinho</Text>

            </View>
        
      </View>
 
    );
}

