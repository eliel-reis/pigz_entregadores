import { Text, View, Image, TextInput, Pressable } from "react-native";

import Logo from "../../assets/pigz-logotipo-branco.png";
import Logo_Google from "../../assets/logo_googleg_48dp.png";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import { useEffect, useState } from "react";

export default function TelaLogin(props) {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState("");
  const [senhaOculta, setSenhaOculta] = useState(true);

  const mudarSenhaOculta = () => {
    setSenhaOculta(!senhaOculta);
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer01}>
        <Image resizeMode="contain" source={Logo} style={styles.imgLogo} />
        <Text style={styles.subTitulo}>Para entregadores</Text>
      </View>

      <View style={styles.containerInputs}>
        <Text style={styles.texto01}>Login</Text>

        <Text style={styles.label}>Email ou Telefone</Text>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="example@pigz.com.br"
            keyboardType="email-address"
            placeholderTextColor="#4B4B4B"
            value={email}
            onChangeText={(e) => {
              setEmail(e);
            }}
          />
        </View>

        <Text style={styles.label}>Senha</Text>
        <View style={styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor="#4B4B4B"
            secureTextEntry={senhaOculta}
            value={senha}
            onChangeText={(e) => {
              setSenha(e);
            }}
          />
          <Pressable onPress={mudarSenhaOculta}>
            <Feather
              name={senhaOculta ? "eye-off" : "eye"}
              size={24}
              color="#FF671F"
            />
          </Pressable>
        </View>

        <Text style={styles.texto02}>Esqueci minha senha</Text>

        <Pressable
          style={styles.btn}
          onPress={() => {
            props.navigation.navigate("Visão geral");
          }}
        >
          <Text style={styles.textoBtn}>Entrar</Text>
        </Pressable>

        <View style={styles.containerTextoCriarConta}>
          <Text style={styles.texto03}>Não tem uma Conta?</Text>
          <Text style={styles.texto04}>Criar agora!</Text>
        </View>

        <View style={styles.containerTexto05}>
          <Text style={styles.texto05}>Entrar com</Text>
          <Text style={styles.underline}></Text>
        </View>

        <Pressable style={styles.btnGoogle}>
          <Image source={Logo_Google} style={styles.logo_google} />
          <Text style={styles.texto06}>Continuar com o Google</Text>
        </Pressable>
      </View>
    </View>
  );
}
