import Button from "@/src/components/Button";
import React, { useState } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "@/src/components/authHeader";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
}

const ProductDetail = ({ navigation, route }: any) => {
  const { product } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Back Button Container */}
        <View style={styles.headerContainer}>
          <Pressable onPress={handleBackPress} style={styles.backButton}>
            <Image
              source={require("../../../assessts/back.png")}
              style={styles.backIcon}
              tintColor="#1a237e"
            />
          </Pressable>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: product.image }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          {/* Product Details */}
          <View style={styles.detailsContainer}>
            {/* Product Name */}
            <Text style={styles.productName}>{product.title}</Text>

            {/* Product Price */}
            <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>

            {/* Product Description */}
            <Text style={styles.productDescription}>{product.description}</Text>

            {/* Favorite and Contact Seller */}
            <View style={styles.actionContainer}>
              <TouchableOpacity
                style={styles.favoriteButton}
                onPress={toggleFavorite}
              >
                <MaterialIcons
                  name={isFavorite ? "bookmark" : "bookmark-border"}
                  size={28}
                  color={isFavorite ? "#1a237e" : "#333"}
                />
              </TouchableOpacity>

              <Button
                buttonText="Contact Seller"
                onPress={() => console.log("Contact Seller")}
                style={styles.contactButton}
                textStyle={styles.contactButtonText}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    position: "absolute",
    top: 40, // Adjust based on your header height
    left: 20,
    zIndex: 10, // Ensure it appears above other elements
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  scrollView: {
    flex: 1,
    marginTop: 0, // Remove any margin that might push content down
  },
  imageContainer: {
    height: windowHeight * 0.5,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  detailsContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  productPrice: {
    fontSize: 22,
    fontWeight: "600",
    color: "#2a2a2a",
    marginBottom: 16,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 10,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  favoriteButton: {
    padding: 10,
    marginTop: 15,
  },
  contactButton: {
    flex: 1,
    marginLeft: 20,
    backgroundColor: "#1a237e",
    borderWidth: 1,
    borderColor: "#1a237e",
    marginTop: 15,
    borderRadius: 8,
    paddingVertical: 12,
  },
  contactButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default ProductDetail;
