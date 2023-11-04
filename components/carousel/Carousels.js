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
const Carousels = () => {
  const { carousels } = useCarousel();
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  const carouselWidth = Dimensions.get("screen").width;
  const itemWidth = Dimensions.get("window").width;

  const carousel = carousels?.map((d) =>
    d?.items?.map((c) => {
      return c;
    })
  );
  console.log(carousel, "=============================");

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        containerCustomStyle={{ overflow: "visible" }}
        data={carousel}
        renderItem={({ item }) => <CarouselItem item={item} />}
        ref={isCarousel}
        loop={true}
        firstItem={1}
        inactiveSlideOpacity={0.75}
        inactiveSlideScale={0.77}
        sliderWidth={400}
        itemWidth={280}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
      <Pagination
        containerStyle={{
          paddingTop: 5,
          paddingBottom: 10,
        }}
        dotsLength={carousel?.length}
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
