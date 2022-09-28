import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { ItemCard } from "../../components";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export const CatalogScreen = () => {
  //USE NAVIGATION
  const navigation = useNavigation();

  //USE STATE
  const [offset, setOffset] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  //RENDER
  const renderItems = ({ item, index }) => (
    <ItemCard
      title={item.name}
      pokemonIndex={index + 1}
      buttonPress={() =>
        navigation.navigate("CatalogDetailScreen", {
          pokemonId: index + 1,
          pokemon: item,
        })
      }
    />
  );

  //USE EFFECT
  useEffect(() => {
    getDataList();
  }, []);

  //FUNCTIONS
  const getDataList = async () => {
    console.log("offsetGetData:", offset);
    const baseUrl = "https://pokeapi.co/api/v2/";
    const url = `${baseUrl}pokemon?limit=10&offset=${offset}`;
    try {
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("response:", response.data.results);
      setPokemonList((prev) => prev.concat(response.data.results));
      setOffset(offset + 10);
    } catch (error) {
      console.log("error:", error);
    }
  };

  const handleGetMoreData = () => {
    console.log("get more", offset);
    // if (pokemonList.length) {
    getDataList();
    // }
  };

  return (
    <FlatList
      data={pokemonList}
      style={{ flex: 1, backgroundColor: "pink" }}
      renderItem={renderItems}
      contentContainerStyle={{ padding: 15 }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      onEndReached={handleGetMoreData}
      onEndReachedThreshold={0.001}
    />
  );
};
