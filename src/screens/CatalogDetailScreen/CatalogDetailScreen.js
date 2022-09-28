import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { View, Image, Text } from "react-native";
import { styles } from "./Style/CatalogDetailStyle";
import _ from "lodash";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export const CatalogDetailScreen = () => {
  //USE ROUTE
  const route = useRoute();

  //ROUTE ITEMS
  const { pokemonId, pokemon } = route.params;

  //USE STATE
  const [detail, setDetail] = useState({});

  //VARIABLES
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  //USE EFFECT
  useEffect(() => {
    getDetailInfo();
  }, []);

  //FUNCTIONS
  const getDetailInfo = async () => {
    try {
      const response = await axios.get(pokemon.url, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("responseDetail:", response.data);
      setDetail(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{ uri: url }} />
      <Text style={styles.title}>{_.capitalize(pokemon.name)}</Text>
      <ScrollView
        style={styles.bottomView}
        contentContainerStyle={{ padding: 15 }}
      >
        <Text style={[styles.title, { marginBottom: 10 }]}>
          More Information
        </Text>
        <Text>
          Abilities:{" "}
          {detail?.abilities?.map((i, index) => (
            <Text key={index}>{i?.ability?.name}, </Text>
          ))}
        </Text>
        <Text>Base Experience: {detail?.base_experience}</Text>
        <Text>Height: {detail?.height}</Text>
        <Text>
          Moves:{" "}
          {detail?.moves?.map((i, index) => (
            <Text key={index}>{i?.move?.name}, </Text>
          ))}
        </Text>
      </ScrollView>
    </View>
  );
};
