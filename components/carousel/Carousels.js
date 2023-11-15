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
import CarouselItem from "./CaruoselITem";
import Carousel from "react-native-snap-carousel";
import AsyncStorage from "@react-native-async-storage/async-storage";
export let refetchCarousel;
const Carousels = () => {
  const { carousels, setRefetchCarousel } = useCarousel();
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const carouselWidth = Dimensions.get("screen").width;
  const itemWidth = Dimensions.get("window").width;

  refetchCarousel = setRefetchCarousel;

  const carousel = carousels?.items;

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        containerCustomStyle={{ overflow: "visible" }}
        data={carousel}
        renderItem={({ item }) => <CarouselItem key={item?._id} item={item} />}
        ref={isCarousel}
        loop={true}
        firstItem={1}
        inactiveSlideOpacity={0.7}
        inactiveSlideScale={0.8}
        sliderWidth={400}
        itemWidth={290}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
      <Pagination
        containerStyle={{
          paddingTop: 5,
          paddingBottom: 10,
        }}
        dotsLength={carousel?.length ? carousel?.length : null}
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

export default Carousels;

const styles = StyleSheet.create({
  carouselContainer: {
    paddingTop: 15,
    flex: 1,
    alignSelf: "center",
    height: 200,
  },
  carouselDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    backgroundColor: "rgba(0, 0, 0, 0.92)",
  },
});

// (
//           <TouchableOpacity style={{ marginBottom: 10, paddingHorizontal: 20 }}>
//             <Image
//               resizeMode="contain"
//               style={{ width: "100%", borderRadius: 10, height: 200 }}
//               source={{ uri: item?.photoURL }}
//             />
//           </TouchableOpacity>
//         )
