import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import LandingNewsFeed from "../components/news/LandingNewsFeed";
import { gql, useLazyQuery } from "@apollo/client";

export default function HomeScreen({ navigation }: any) {
  const CHAPTERS_QUERY = gql`
    query Chapters {
      chapters {
        id
        number
        title
      }
    }
  `;

  const [fetchChapters, { data, loading, error }] =
    useLazyQuery(CHAPTERS_QUERY);

  useEffect(() => {
    fetchChapters();
  }, []);

  console.log({ data, loading });

  return (
    <Container>
      <ExplainContain>
        <Text style={{ fontSize: 32, padding: 10 }}>What is Hodlwatch?</Text>

        <Text style={{ fontSize: 20, padding: 10 }}>
          Making web3 a little more balanced
        </Text>

        <Text style={{ fontSize: 18, padding: 10, textAlign: "center" }}>
          At Hodlwatch, we feel that Bitcoin & web3 were built to balance the
          economic scales a bit by providing transparency, and a trustless
          guarantee via blockchain. Too long that data has been made
          a-symmetrical in its access behind paywalls and lack of community
          integration. We're working to solve that by democratizing access to
          blockchain data, but integrating your community to make it relevant to
          your every day choices.
        </Text>

        {/* <TouchableOpacity
  style={[styles.button, { backgroundColor: "#ee2244" }]}
  onPress={onTap}
  hitSlop={{ top: 100, left: 50, right: 50, bottom: 100 }}
  pressRetentionOffset={200}
>
  <Text>Red button</Text>
</TouchableOpacity> */}
        <ButtonRow>
          <TouchableOpacityButton>
            <Text style={{ color: "white" }}>Our Story</Text>
          </TouchableOpacityButton>

          <TouchableOpacityButton>
            <Text style={{ color: "white" }}>Web3</Text>
          </TouchableOpacityButton>
        </ButtonRow>
      </ExplainContain>

      <InterstitialColumn>
        <InterstititalTextWrapper>
          <Text style={{ fontSize: 32, padding: 10, color: "white" }}>
            Data Directly From The Blockchain
          </Text>

          <Text
            style={{
              fontSize: 20,
              padding: 10,
              color: "white",
              textAlign: "center",
            }}
          >
            We believe in letting the data speak for itself
          </Text>

          <Text style={{ fontSize: 16, padding: 10, color: "white" }}>
            (but just in case, we add some descriptions)
          </Text>
        </InterstititalTextWrapper>

        <InterstitialImageRow>
          <ImageColumnContainer>
            <Image
              source={require("../../assets/charts.png")}
              style={{ width: 175, height: 200 }}
            />

            <Text style={{ color: "white", textAlign: "center" }}>
              Financial Indicators
            </Text>

            <Text style={{ color: "white", textAlign: "center" }}>
              Analyzing price points, common resistance/support levels, and
              traditional methods
            </Text>
          </ImageColumnContainer>

          <ImageColumnContainer>
            <Image
              source={require("../../assets/piechart.png")}
              style={{ width: 175, height: 200 }}
            />

            <Text style={{ color: "white", textAlign: "center" }}>
              Portfolio Analysis
            </Text>

            <Text style={{ color: "white", textAlign: "center" }}>
              Connect your exchange accoutn via our API and get insights into
              your holdings
            </Text>
          </ImageColumnContainer>
        </InterstitialImageRow>
      </InterstitialColumn>

      <ExplainContain>
        <Text style={{ fontSize: 32, padding: 10 }}>Get Involved</Text>

        <Text style={{ fontSize: 20, padding: 10 }}>Join the Communinty</Text>

        <Text style={{ fontSize: 18, padding: 10, textAlign: "center" }}>
          Sign up to join our community and gain more insights as you explore
          different assets
        </Text>

        <ButtonRow>
          <TouchableOpacityButton>
            <Text style={{ color: "white" }}>Sign Up</Text>
          </TouchableOpacityButton>

          <TouchableOpacityButton>
            <Text style={{ color: "white" }}>Sign In</Text>
          </TouchableOpacityButton>
        </ButtonRow>
      </ExplainContain>

      <LandingNewsFeed />
    </Container>
  );
}

const TouchableOpacityButton = styled.TouchableOpacity`
  background-color: #806cfe;
  padding: 10px;
  border-radius: 12px;
  margin-horizontal: 10px;
  border: 2px solid black;

  // TODO: Box-shadow react-native touchable
  /* shadowColor: '#171717';
  shadow-offset: {width: 4px, height: 8px};
  shadow-opacity: 1;
  shadow-radius: 3px;
  elevation: 2; */
`;

const ButtonRow = styled.View`
  display: flex;
  flex-direction: row;
  padding-vertical: 10px;
`;

const Container = styled.ScrollView`
  background-color: white;
`;

const ExplainContain = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-horizontal: 15px;
`;

const InterstitialColumn = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: black;
`;

const InterstititalTextWrapper = styled.View`
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-horizontal: 15px;
  padding-vertical: 10px;
`;

const InterstitialImageRow = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
  padding: 10px;
`;

const ImageColumnContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
