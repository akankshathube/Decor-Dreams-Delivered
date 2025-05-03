import {
  Image,
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";

interface ImageWithTitleProps {
  title: string;
  showBackButton?: boolean;
  imageUrl: string;
  productName: string;
  productPrice: string;
  productId: number; // Added to identify the product
  onPress?: () => void;
  onAddToFavorites?: (id: number, isFavorite: boolean) => void; // Callback for favorites
}

const ImageWithTitle: React.FC<ImageWithTitleProps> = ({
  imageUrl,
  productName,
  productPrice,
  productId,
  onPress,
  onAddToFavorites,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoritePress = (event: any) => {
    event.stopPropagation(); // Prevent triggering the parent onPress
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    if (onAddToFavorites) {
      onAddToFavorites(productId, newFavoriteState);
    }
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.heartIconContainer}
          onPress={handleFavoritePress}
          activeOpacity={0.7}
        >
          {isFavorite ? (
            <Text style={styles.heartIcon}>❤️</Text>
          ) : (
            <Text style={styles.heartIcon}>🤍</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {productName}
        </Text>
        <Text style={styles.price}>${productPrice}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: 120,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  heartIconContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  heartIcon: {
    fontSize: 18,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
});

export default ImageWithTitle;
