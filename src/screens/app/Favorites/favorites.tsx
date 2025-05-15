import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ImageWithTitle from "@/src/components/ImagewithTitle";

const Favorites = ({ navigation, route }: any) => {
  const { favorites } = route.params || { favorites: [] };

  const renderFavoriteItem = ({ item }: { item: any }) => (
    <ImageWithTitle
      productId={item.id}
      title={item.title}
      imageUrl={item.image}
      productName={item.title}
      productPrice={item.price.toString()}
      isFavorite={true}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Favorites</Text>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
        />
      ) : (
        <Text style={styles.emptyText}>No favorites yet</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#888",
  },
});

export default Favorites;
