const productList = {
  products: [
    {
      id: 1,
      title: "Modern Velvet Armchair",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJtY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "ArmChairs",
      price: 349.99,
    },
    {
      id: 2,
      title: "Minimalist Wooden Table",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Tables",
      price: 229.5,
    },
    {
      id: 3,
      title: "Industrial Pendant Lamp",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Lamps",
      price: 89.99,
    },
    {
      id: 4,
      title: "Scandinavian Dining Chair",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Chairs",
      price: 179.0,
    },
    {
      id: 5,
      title: "King Size Platform Bed",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Bed",
      price: 799.0,
    },
    {
      id: 6,
      title: "Mid-Century Lounge Chair",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFybWNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Popular",
      price: 459.99,
    },
    {
      id: 7,
      title: "Glass Top Coffee Table",
      image:
        "https://images.unsplash.com/photo-1555041463-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Popular",
      price: 289.0,
    },
    {
      id: 8,
      title: "Adjustable Floor Lamp",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRqdXN0YWJsZSUyMGZsb29yJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Lamps",
      price: 129.95,
    },
    {
      id: 9,
      title: "Leather Executive Chair",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Chairs",
      price: 399.0,
    },
    {
      id: 10,
      title: "Upholstered Queen Bed",
      image:
        "https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Bed",
      price: 699.0,
    },
    {
      id: 11,
      title: "Wingback Reading Chair",
      image:
        "https://images.unsplash.com/photo-1598301257981-8ebc6b0ab259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFybWNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "ArmChairs",
      price: 429.0,
    },
    {
      id: 12,
      title: "Rustic Wooden Desk",
      image:
        "https://images.unsplash.com/photo-1604074131665-7a4b13870ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVzdGljJTIwd29vZGVuJTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Tables",
      price: 349.0,
    },
    {
      id: 13,
      title: "Modern Tripod Lamp",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Popular",
      price: 79.99,
    },
    {
      id: 14,
      title: "Acrylic Ghost Chair",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2hvc3QlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Chairs",
      price: 159.0,
    },
    {
      id: 15,
      title: "Canopy Bed with Storage",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Bed",
      price: 899.0,
    },
    {
      id: 16,
      title: "Vintage Swivel Chair",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJtY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "ArmChairs",
      price: 279.0,
    },
    {
      id: 17,
      title: "Extendable Dining Table",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Tables",
      price: 499.0,
    },
    {
      id: 18,
      title: "Crystal Chandelier",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5c3RhbCUyMGNoYW5kZWxpZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      category: "Lamps",
      price: 349.0,
    },
    {
      id: 19,
      title: "Ergonomic Office Chair",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Popular",
      price: 229.0,
    },
    {
      id: 20,
      title: "Sleek Console Table",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Tables",
      price: 199.0,
    },
  ],
};
export default productList;
