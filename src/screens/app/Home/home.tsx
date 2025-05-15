import Header from "@/src/components/authHeader";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ImageWithTitle from "@/src/components/ImagewithTitle";
import productList from "../../../components/Data/productList";

interface Product {
  id: number;
  title: string;
  image: string;
  category: string;
  price: number;
}

interface Category {
  name: string;
  icon: string;
}

const Home = ({ navigation }: any) => {
  const categories: Category[] = [
    { name: "Popular", icon: "star" },
    { name: "Chairs", icon: "chair" },
    { name: "ArmChairs", icon: "weekend" },
    { name: "Tables", icon: "table-restaurant" },
    { name: "Bed", icon: "king-bed" },
    { name: "Lamps", icon: "lightbulb" },
  ];

  const [activeCategory, setActiveCategory] = React.useState<string>("Popular");
  const [favorites, setFavorites] = React.useState<number[]>([]); // Store favorite product IDs

  // Filter products based on active category
  const filteredProducts = productList.products.filter((product) => {
    if (activeCategory === "Popular") {
      return true;
    }
    return product.category === activeCategory;
  });

  // Handle favorite toggle
  const handleFavoriteToggle = (productId: number, isFavorite: boolean) => {
    if (isFavorite) {
      setFavorites([...favorites, productId]);
    } else {
      setFavorites(favorites.filter((id) => id !== productId));
    }
  };
  const handleHomePress = () => {
    console.log("Navigating to HomeScreen"); // Add this for debugging
    navigation.navigate("Home"); // Ensure this matches your navigator
  };
  // Navigate to favorites screen
  const navigateToFavorites = () => {
    const favoriteProducts = productList.products.filter((product) =>
      favorites.includes(product.id)
    );
    navigation.navigate("Favorites", { favorites: favoriteProducts });
  };

  const renderProductItem = ({ item }: { item: Product }) => (
    <ImageWithTitle
      productId={item.id}
      title={item.title}
      imageUrl={item.image}
      productName={item.title}
      productPrice={item.price.toString()}
      isFavorite={favorites.includes(item.id)}
      onAddToFavorites={handleFavoriteToggle}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    />
  );

  return (
    <View style={styles.container}>
      <Header title="Find All You Need" />

      {/* Horizontal Tabs */}
      <View style={styles.tabContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabScrollView}
        >
          {categories.map((category) => (
            <TouchableOpacity
              key={category.name}
              style={[
                styles.tabItem,
                activeCategory === category.name && styles.activeTabItem,
              ]}
              onPress={() => setActiveCategory(category.name)}
            >
              <MaterialIcons
                name={category.icon as any}
                size={24}
                color={activeCategory === category.name ? "#000" : "#888"}
              />
              <Text
                style={[
                  styles.tabText,
                  activeCategory === category.name && styles.activeTabText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Main Content */}
      <View style={styles.contentContainer}>
        <FlatList
          data={filteredProducts}
          renderItem={renderProductItem}
          keyExtractor={(item: Product) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tabContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  tabScrollView: {
    paddingHorizontal: 15,
  },
  tabItem: {
    alignItems: "center",
    marginRight: 20,
    paddingVertical: 8,
  },
  activeTabItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  tabText: {
    marginTop: 5,
    fontSize: 12,
    color: "#888",
  },
  activeTabText: {
    color: "#000",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 80, // Add padding to account for tab bar
  },
  testContent: {
    padding: 16,
  },
  testText: {
    fontSize: 20,
    color: "#000",
    marginBottom: 16,
  },
});

export default Home;
