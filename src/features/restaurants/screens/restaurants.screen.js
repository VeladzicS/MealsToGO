import React, { useContext } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { restaurants, loading, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {loading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          console.log(item);
          return <RestaurantsInfoCard restaurant={item} />;
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};
