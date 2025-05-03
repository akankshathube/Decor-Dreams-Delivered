import HomeScreen from "@/app/(tabs)";
import Button from "@/src/components/Button";
import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";

// Sample product type (replace with your actual product type)
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const Favorites = () => {
  // State to store favorited products
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load favorites on component mount
  // In a real app, this would fetch from AsyncStorage, Redux, or an API
  useEffect(() => {
    // Mock data - replace with your actual data loading logic
    const loadFavorites = () => {
      // Sample data - replace with your actual favorite products
      const mockFavorites = [
        {
          id: 1,
          title: "Modern Velvet Armchair",
          image: "/api/placeholder/300/200",
          price: 349.99,
        },
        {
          id: 6,
          title: "Mid-Century Lounge Chair",
          image: "/api/placeholder/300/200",
          price: 459.99,
        },
        {
          id: 13,
          title: "Modern Tripod Lamp",
          image: "/api/placeholder/300/200",
          price: 79.99,
        },
      ];

      setFavorites(mockFavorites);
      setIsLoading(false);
    };

    loadFavorites();
  }, []);

  // Remove item from favorites
  const removeFromFavorites = (productId: number) => {
    // Filter out the removed product
    setFavorites(favorites.filter((item) => item.id !== productId));

    // In a real app, you would also update AsyncStorage, Redux store, or your backend
  };

  // Render each favorite item
  const renderFavoriteItem = ({ item }: { item: Product }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <Image
          source={{ uri: item.image }}
          style={styles.productImage}
          resizeMode="cover"
        />

        <View style={styles.productInfo}>
          <Text style={styles.productTitle} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
        </View>

        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeFromFavorites(item.id)}
        >
          <Text style={styles.removeButtonText}>✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Empty state when no favorites
  const EmptyFavorites = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No favorites added yet</Text>
      <Button
        buttonText="Explore Products"
        onPress={HomeScreen}
        style={styles.button}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Favorites</Text>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Text>Loading your favorites...</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyFavorites}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    marginTop: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  itemContainer: {
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: "hidden",
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 6,
  },
  productInfo: {
    flex: 1,
    paddingHorizontal: 12,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2a2a2a",
  },
  removeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  removeButtonText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1a237e", // Dark blue
    borderWidth: 1,
    borderColor: "#1a237e",
    marginTop: 15,
  },
});

export default Favorites;
