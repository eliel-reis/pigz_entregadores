import { View, Text, Pressable, TextInput, Image, ScrollView } from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import { useState } from "react";

import QrCode from "../../assets/qrcode.png";

export default function VisaoGeral(props) {
  const [valorOculto, setValorOculto] = useState(false);

  const mudarValorOculto = () => {
    setValorOculto(!valorOculto);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.linha}>
          <Text style={styles.texto01Linha}>Ganhos do Dia</Text>
          <Text style={styles.texto01Linha}>29/07</Text>
        </View>
        <View style={styles.linha}>
          {valorOculto ? (
            <Text style={styles.texto02Linha}>R$ 150</Text>
          ) : (
            <Text style={styles.texto02Linha}>R$ ****</Text>
          )}

          <Pressable onPress={mudarValorOculto}>
            <Feather
              name={valorOculto ? "eye" : "eye-off"}
              size={30}
              color="white"
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.subContainer02}>
      
        <Text style={styles.texto03SubContainer02} >Resumos das Entregas</Text>

          <View style={styles.subContainer0201} >

            <View style={styles.box} >
              <Text style={styles.texto04Box} >Aceitas</Text>
              <Text style={styles.texto05Box} >15</Text>
            </View>

            <View style={styles.box} >
              <Text style={styles.texto04Box}  >Rejeitadas</Text>
              <Text style={styles.texto05Box} >5</Text>
            </View>

            <View style={styles.box} >
              <Text style={styles.texto04Box}  >Total</Text>
              <Text style={styles.texto05Box} >20</Text>
            </View>
          </View>

      </View>


      <View style={styles.subContainer02} >
          <Text style={styles.texto03SubContainer02} >Iniciar Nova Entrega</Text>

          <Text style={[styles.texto04Box,{textAlign: "left"}]} >Número de Identificação</Text>

          <View style={styles.subContainer03} >
            <TextInput style={styles.inputSubContainer03}  />
            <Pressable onPress={() => props.navigation.navigate("Nova entrega")} style={styles.btnSubContainer03} ><Text style={styles.textoBtn06} >OK</Text></Pressable>
          </View>

          <Pressable style={styles.btnQrcode} >
            <Image source={QrCode} alt="Imagem de um qrcode de exemplo" style={styles.qrCodeImg} />
            <Text style={styles.textoBtn06} >Escanear Qrcode</Text>
          </Pressable>
      </View>
    </ScrollView>
  );
}
