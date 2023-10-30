import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NotifyStyle } from "./NotifyStyle";
import { BackArrow2, SettingsGear } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

const Notification = () => {
  const navigation = useNavigation();
  // const [modalVisible, setModalVisible] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* header Box */}
      <View style={NotifyStyle.headerBox}>
        <View style={NotifyStyle.backArrowAndTtile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow2 />
          </TouchableOpacity>
          <Text style={NotifyStyle.title}>Notification</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <SettingsGear />
          </TouchableOpacity>
        </View>
      </View>
      {/* header Box end */}
      {/* Notification box */}
      <ScrollView>
        <View style={NotifyStyle.notificationBox}>
          <View style={NotifyStyle.storeLogoAndOfferCon}>
            <View style={NotifyStyle.dot}></View>
            <View>
              <Image source={require("../../assets/image/noon.png")} />
            </View>
            <View>
              <Text>Get up to 41% off</Text>
              <Text>Sivvi valid offers for you</Text>
            </View>
          </View>
          <View>
            <Text>5 m ago</Text>
            <Text>$50.00</Text>
            <Text>$40.00</Text>
          </View>
        </View>
      </ScrollView>
      {/* Notification box end*/}
      {/* ===================== */}
      {/* bottom sheet modal  */}
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        swipeDirection="down"
        onSwipeComplete={() => toggleModal()}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        isVisible={modalVisible}
        style={NotifyStyle.modal}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={300}
      >
        <View style={NotifyStyle.modalContent}>
          <View style={NotifyStyle.insideToggleBar}></View>
        </View>
      </Modal>
      {/* bottom sheet modal ends */}
    </SafeAreaView>
  );
};

export default Notification;
