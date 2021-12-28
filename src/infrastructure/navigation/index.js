import React, { useContext } from "react";
import { AccountNavigator } from "./account.navigator";
import { AuthContext } from "../../services/auth/auth.context";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {isAuth ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
