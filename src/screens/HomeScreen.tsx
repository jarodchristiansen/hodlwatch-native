import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default function HomeScreen({ navigation }: any) {
  return (
    <Container>
      <Text>This is the home screen</Text>

      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: green;
  align-items: center;
  justify-content: center;
`;
