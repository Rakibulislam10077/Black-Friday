import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useCarousel } from "../../hooks/AllHooks";
import { Pagination } from "react-native-snap-carousel";

const Carousel = () => {
  const { carousels } = useCarousel();
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);

  const carouselWidth = Dimensions.get("screen").width;
  const itemWidth = Dimensions.get("window").width;
  return (
    <View style={styles.carouselContainer}>
      <Carousel
        containerCustomStyle={{ overflow: "visible" }}
        data={carousels}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginBottom: 10, paddingHorizontal: 20 }}>
            <Image
              resizeMode="contain"
              style={{ width: "100%", borderRadius: 10, height: 200 }}
              source={{ uri: item?.photoURL }}
            />
          </TouchableOpacity>
        )}
        ref={isCarousel}
        loop={true}
        firstItem={1}
        inactiveSlideOpacity={0.75}
        inactiveSlideScale={0.77}
        sliderWidth={carouselWidth}
        itemWidth={itemWidth}
        // slideStyle={{ display: 'flex', alignItems: 'center', }}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        containerStyle={{
          paddingTop: 0,
          paddingBottom: 10,
        }}
        dotsLength={carousels?.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={styles.carouselDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={1}
        tappableDots={true}
        inactiveDotStyle={{ width: 6, height: 6 }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    paddingTop: 15,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 250,
    backgroundColor: "#ffffff",
    borderTopColor: "rgba(0,0,0,0.1)",
    borderTopWidth: 5,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 5,
  },
  carouselDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "rgba(0, 0, 0, 0.92)",
  },
});
