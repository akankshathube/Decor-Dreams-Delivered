const productList = {
  products: [
    {
      id: 1,
      title: "Modern Velvet Armchair",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJtY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "ArmChairs",
      price: 349.99,
      description:
        "Luxurious velvet upholstery with elegant tapered legs. This contemporary armchair offers exceptional comfort with its high-density foam cushions and supportive backrest. Perfect for living rooms or reading nooks.",
    },
    {
      id: 2,
      title: "Minimalist Wooden Table",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Tables",
      price: 229.5,
      description:
        "Clean-lined Scandinavian design featuring sustainably sourced oak wood. The smooth surface and rounded edges make this table both stylish and family-friendly. Ideal for small dining spaces or as a work desk.",
    },
    {
      id: 3,
      title: "Industrial Pendant Lamp",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Lamps",
      price: 89.99,
      description:
        "Edison-style bulb housed in a black metal cage with adjustable hanging cord. This statement piece combines vintage charm with industrial aesthetics, perfect for kitchen islands or dining areas.",
    },
    {
      id: 4,
      title: "Scandinavian Dining Chair",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Chairs",
      price: 179.0,
      description:
        "Lightweight yet sturdy design with curved backrest for ergonomic support. The white oiled oak frame and woven seat create a natural, airy feel. Stackable for easy storage when not in use.",
    },
    {
      id: 5,
      title: "King Size Platform Bed",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Bed",
      price: 799.0,
      description:
        "Low-profile platform bed with built-in slats for mattress support. The rich walnut finish and clean lines create a sophisticated bedroom centerpiece. Includes ample under-bed clearance for storage bins.",
    },
    {
      id: 6,
      title: "Mid-Century Lounge Chair",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFybWNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Popular",
      price: 459.99,
      description:
        "Timeless design with splayed walnut legs and contoured backrest. Premium top-grain leather upholstery develops a beautiful patina over time. Swivel base allows for flexible positioning.",
    },
    {
      id: 7,
      title: "Glass Top Coffee Table",
      image:
        "https://images.unsplash.com/photo-1555041463-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Popular",
      price: 289.0,
      description:
        "Tempered glass surface on a sleek metal frame creates an illusion of space. Rounded corners ensure safety, while the lower shelf provides additional display or storage space. Wipe-clean surface.",
    },
    {
      id: 8,
      title: "Adjustable Floor Lamp",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRqdXN0YWJsZSUyMGZsb29yJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Lamps",
      price: 129.95,
      description:
        "Articulating arm with three adjustable joints for precise lighting placement. Energy-efficient LED bulb included with three color temperature settings. Heavy base prevents tipping.",
    },
    {
      id: 9,
      title: "Leather Executive Chair",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Chairs",
      price: 399.0,
      description:
        "Premium bonded leather with thick padding for all-day comfort. Features tilt mechanism, adjustable height, and 360-degree swivel. Padded armrests and lumbar support promote proper posture.",
    },
    {
      id: 10,
      title: "Upholstered Queen Bed",
      image:
        "https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Bed",
      price: 699.0,
      description:
        "Channel-tufted headboard in soft linen-blend fabric. Sturdy wooden frame with center support legs. Neutral color complements any bedroom decor. Assembly required but tools included.",
    },
    {
      id: 11,
      title: "Wingback Reading Chair",
      image:
        "https://images.unsplash.com/photo-1598301257981-8ebc6b0ab259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFybWNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "ArmChairs",
      price: 429.0,
      description:
        "Classic wingback design with high back and side wings for privacy and support. Deep seat cushion filled with high-resiliency foam. Available in multiple fabric options to match your decor.",
    },
    {
      id: 12,
      title: "Rustic Wooden Desk",
      image:
        "https://images.unsplash.com/photo-1604074131665-7a4b13870ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cnVzdGljJTIwd29vZGVuJTIwZGVza3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Tables",
      price: 349.0,
      description:
        "Reclaimed pine wood with visible knots and natural imperfections. Spacious work surface with two drawers for organization. Distressed finish adds character to home offices or studios.",
    },
    {
      id: 13,
      title: "Modern Tripod Lamp",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Popular",
      price: 79.99,
      description:
        "Sleek three-legged design with fabric drum shade. On/off switch on cord. Provides warm, diffused lighting perfect for bedside tables or side tables. Bulb included.",
    },
    {
      id: 14,
      title: "Acrylic Ghost Chair",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2hvc3QlMjBjaGFpcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=80",
      category: "Chairs",
      price: 159.0,
      description:
        "Transparent polycarbonate material creates a 'floating' effect. Inspired by classic French bistro chairs. Sturdy construction supports up to 250 lbs. Wipes clean easily.",
    },
    {
      id: 15,
      title: "Canopy Bed with Storage",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      category: "Bed",
      price: 899.0,
      description:
        "Four-post bed frame with attachable canopy drapes. Includes six spacious drawers in the base for linens or clothing. Available in white or espresso finish. Creates a luxurious bedroom focal point.",
    },
    {
      id: 16,
      title: "Vintage Swivel Chair",
      image:
        "https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJtY2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "ArmChairs",
      price: 279.0,
      description:
        "Retro-inspired design with 360-degree swivel base. Button-tufted backrest and thick seat cushion. Chrome legs add mid-century modern flair. Perfect for home offices or conversation areas.",
    },
    {
      id: 17,
      title: "Extendable Dining Table",
      image:
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      category: "Tables",
      price: 499.0,
      description:
        "Butterfly leaf extension system allows table to seat 4-8 people. Solid rubberwood construction with protective lacquer finish. Scratch-resistant surface perfect for family dining.",
    },
    {
      id: 18,
      title: "Crystal Chandelier",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J5c3RhbCUyMGNoYW5kZWxpZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=80",
      category: "Lamps",
      price: 349.0,
      description:
        "Elegant 12-light fixture with genuine lead crystal pendants. Dimmable for adjustable ambiance. Ideal for dining rooms or grand entryways. Professional installation recommended.",
    },
    {
      id: 19,
      title: "Ergonomic Office Chair",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoYWlyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Popular",
      price: 229.0,
      description:
        "Breathable mesh back with adjustable lumbar support. Synchronous tilt mechanism follows your movements. Waterfall seat edge reduces leg pressure during long work sessions.",
    },
    {
      id: 20,
      title: "Sleek Console Table",
      image:
        "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      category: "Tables",
      price: 199.0,
      description:
        "Narrow profile fits perfectly in entryways or behind sofas. Metal frame with tempered glass top. Lower shelf provides display space. Modern design that doesn't overwhelm small spaces.",
    },
  ],
};

export default productList;
