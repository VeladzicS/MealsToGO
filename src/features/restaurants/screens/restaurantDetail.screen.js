import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
