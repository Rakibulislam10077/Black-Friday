import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const HowToUs = ({ data }) => {
  console.log(data, "99999999999999999999999999999999999999");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#fff", flex: 1 }}>
        <View
          style={{
            backgroundColor: "#fff",
            paddingTop: 20,
            padding: 10,
            marginVertical: 10,
            marginBottom: 100,
          }}
        >
          {data?.data?.howToUse?.map((element) => {
            return element?.map((d) => {
              if (d.type === "h3") {
                return (
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "700",
                      color: "rgba(0, 0, 0, 0.7)",
                      marginBottom: 30,
                      marginLeft: 5,
                    }}
                    key={d.id}
                  >
                    {d.content}
                  </Text>
                );
              } else if (d.type === "p") {
                return (
                  <Text
                    style={{
                      fontSize: 16,
                      color: "rgba(0, 0, 0, 0.4)",
                      marginBottom: 30,
                      marginLeft: 5,
                    }}
                    key={d.id}
                  >
                    {d.content}
                  </Text>
                );
              } else if (d.type === "img") {
                return (
                  <Image
                    style={{
                      width: "100%",
                      height: 200,
                      borderRadius: 18,
                      marginBottom: 30,
                    }}
                    key={d.id}
                    source={{ uri: d?.photoURL }}
                  />
                );
              }
            });
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HowToUs;
