import {View, Text, Pressable} from "react-native";

import styles from "./styles";

import {MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";

export default function TelaNovaEntrega() {
    return(
        <View style={styles.container} >
            <View style={styles.subContainer01} >
                <View style={styles.boxSubContainer01} >
                    <Text style={styles.texto01SubContainer01} >Tempo Estimado</Text>
                    <Text style={styles.texto02SubContainer02} >30 Min</Text>
                </View>

                <View  style={styles.boxSubContainer01} >
                    <Text style={styles.texto01SubContainer01} >Número de ID</Text>
                    <Text style={styles.texto02SubContainer02} >#6789</Text>
                </View>
            </View>

            <View style={styles.subContainer02} >
                <Text style={styles.texto01SubContainer01}>Valor da Entrega</Text>
                <Text style={[styles.texto02SubContainer02, {fontSize: 35,}]} >R$ 13,75</Text>
            </View>

            <View style={styles.subContainer03} >
                <View style={styles.barraVertical} ></View>
                <View style={styles.subContainer04} >
                    <MaterialIcons name="delivery-dining" size={24} color="white" />
                    <View >
                        <Text style={styles.texto01SubContainer04}>Entrega</Text>
                        <Text style={styles.texto02SubContainer04} >Percurso Total: 8km</Text>
                    </View>
                </View>

                <View style={styles.subContainer05} >
                <Entypo name="circle" size={15} color="#FA641E" style={{position: "absolute",  bottom: 57, left: 3, backgroundColor: "#FA641E", borderRadius: 7.5}} />


                    <Text style={styles.texto01SubContainer05} > Coleta</Text>

                    <Entypo name="circle" size={10} color="#FA641E" style={{position: "absolute",  bottom: 30, left: 6, backgroundColor: "white"}} />
                    
                    <Text style={styles.texto02SubContainer05} >Restaurante Recanto da Peixada</Text>
                    
                    <Text style={styles.texto02SubContainer05}  >Distancia: 2km</Text>
                </View>
                
                <View style={styles.subContainer05} >
                <Entypo name="circle" size={15} color="#FA641E" style={{position: "absolute",  bottom: 57, left: 3, backgroundColor: "#FA641E", borderRadius: 7.5}} />

                    <Text style={styles.texto01SubContainer05} >Entrega</Text>

                    <Entypo name="circle" size={10} color="#FA641E" style={{position: "absolute",  bottom: 30, left: 6, backgroundColor: "white"}} />
                    

                    <Text style={styles.texto02SubContainer05} >Av: Cabo dos Soldados - Caranã</Text>
                    <Text style={styles.texto02SubContainer05}  >Distancia: 6km</Text>
                </View>

                <View style={styles.containerBtn} >
                    <Pressable style={styles.btnAceitar}>
                    
                        <Text>
                            <AntDesign name="check" size={24} color="white" />
                        </Text>
                        
                        <Text style={styles.texto01BtnAceitar} >
                            Aceitar
                        </Text>
                        
                    </Pressable>
                    
                    <Pressable style={styles.btnRejeitar} >
                    
                    <Text>
                        <AntDesign name="close" size={24} color="#E8453E" />
                    </Text>
                        
                        <Text style={styles.texto01BtnRejeitar} >
                            Rejeitar
                        </Text>
                    
                    </Pressable>
                </View>
            </View>
        </View>
    )
}