import { Text, View } from "react-native";

import styles from "./styles";

export default function TelaAviso() {
    return(
        <View style={styles.container} >
            <Text style={styles.texto} >Serviço em manutenção</Text>
        </View>
    )
}