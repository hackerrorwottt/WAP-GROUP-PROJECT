const productsData = [
  // MEN (1-15)
  { id: 1, brand: "Roadster", name: "Men Cotton Pure Cotton T-shirt", price: 499, originalPrice: 999, discount: 50, category: "men", rating: 4.2, reviews: "2.1k", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Keep it simple and stylish.", sizes: ["S", "M", "L", "XL"] },
  { id: 2, brand: "H&M", name: "Regular Fit Linen-blend Shirt", price: 1299, originalPrice: 1999, discount: 35, category: "men", rating: 4.5, reviews: "1.5k", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Premium linen-blend shirt.", sizes: ["M", "L", "XL"] },
  { id: 7, brand: "WROGN", name: "Men Slim Fit Checked Casual Shirt", price: 1499, originalPrice: 2499, discount: 40, category: "men", rating: 4.1, reviews: "3.2k", image: "https://images.unsplash.com/photo-1589310243389-96a548221702?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Trendy checked shirt.", sizes: ["S", "M", "L"] },
  { id: 8, brand: "Jack & Jones", name: "Men Skinny Fit Jeans", price: 2999, originalPrice: 4999, discount: 40, category: "men", rating: 4.3, reviews: "1.1k", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "High-quality denim.", sizes: ["30", "32", "34", "36"] },
  { id: 21, brand: "HRX", name: "Men Activewear Jacket", price: 1899, originalPrice: 3599, discount: 47, category: "men", rating: 4.4, reviews: "2.4k", image: "https://images.unsplash.com/photo-1591047139829-d91aec96bcba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Perfect for a morning run.", sizes: ["M", "L", "XL"] },
  { id: 22, brand: "Puma", name: "Men Training T-shirt", price: 899, originalPrice: 1499, discount: 40, category: "men", rating: 4.6, reviews: "1.8k", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Breathable fabric.", sizes: ["S", "M", "L"] },
  { id: 23, brand: "Levis", name: "Men 501 Original Fit Jeans", price: 3999, originalPrice: 5999, discount: 33, category: "men", rating: 4.7, reviews: "5.4k", image: "https://images.unsplash.com/photo-1604176354204-926873ff3da9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "The original button-fly jeans.", sizes: ["30", "32", "34", "36"] },
  { id: 24, brand: "US Polo", name: "Men Solid Polo T-shirt", price: 1199, originalPrice: 2299, discount: 48, category: "men", rating: 4.2, reviews: "3.1k", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Classic polo style.", sizes: ["M", "L", "XL"] },
  { id: 25, brand: "Killer", name: "Men Slim Fit Denim Shirt", price: 1599, originalPrice: 2999, discount: 46, category: "men", rating: 4.1, reviews: "1.2k", image: "https://images.unsplash.com/photo-1598911510795-7e7208388b67?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Rugged and durable.", sizes: ["M", "L", "XL"] },
  { id: 26, brand: "Allen Solly", name: "Men Formal Cotton Shirt", price: 1799, originalPrice: 2499, discount: 28, category: "men", rating: 4.3, reviews: "900", image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Perfect for the boardroom.", sizes: ["38", "40", "42"] },
  { id: 27, brand: "Arrow", name: "Men Solid Formal Trousers", price: 2199, originalPrice: 3499, discount: 37, category: "men", rating: 4.5, reviews: "750", image: "https://images.unsplash.com/photo-1624371414361-e6e0fc58d13b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Sharp and sophisticated.", sizes: ["30", "32", "34"] },
  { id: 28, brand: "Brave", name: "Men Graphic Streetwear Hoodie", price: 1999, originalPrice: 3999, discount: 50, category: "men", rating: 4.4, reviews: "1.5k", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Urban style redefined.", sizes: ["S", "M", "L"] },
  { id: 29, brand: "Tommy Hilfiger", name: "Men Signature Pullover", price: 4999, originalPrice: 7999, discount: 37, category: "men", rating: 4.8, reviews: "500", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Premium cotton knits.", sizes: ["M", "L", "XL"] },
  { id: 30, brand: "Rare Rabbit", name: "Men Printed Linen Shirt", price: 2499, originalPrice: 4499, discount: 44, category: "men", rating: 4.6, reviews: "620", image: "https://images.unsplash.com/photo-1618354721013-23105d76be2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Artisan prints.", sizes: ["M", "L"] },
  { id: 31, brand: "Blackberrys", name: "Men Woolen Formal Blazer", price: 7999, originalPrice: 12999, discount: 38, category: "men", rating: 4.7, reviews: "340", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Classic woolen blazer.", sizes: ["40", "42", "44"] },

  // WOMEN (16-30)
  { id: 3, brand: "Libas", name: "Women Floral Print Anarkali Kurta", price: 1599, originalPrice: 2999, discount: 46, category: "women", rating: 4.3, reviews: "3.4k", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Elegant floral print.", sizes: ["XS", "S", "M", "L"] },
  { id: 5, brand: "Levis", name: "Women 711 Skinny Fit Jeans", price: 2499, originalPrice: 3599, discount: 30, category: "women", rating: 4.4, reviews: "1.2k", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Classic skinny fit.", sizes: ["28", "30", "32", "34"] },
  { id: 9, brand: "Varanga", name: "Women Embroidered Straight Kurta", price: 1199, originalPrice: 2499, discount: 52, category: "women", rating: 4.5, reviews: "4.1k", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Beautifully embroidered.", sizes: ["S", "M", "L", "XL"] },
  { id: 10, brand: "Mango", name: "Women Solid Georgette A-Line Dress", price: 3499, originalPrice: 4999, discount: 30, category: "women", rating: 4.6, reviews: "920", image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Chic A-line dress.", sizes: ["XS", "S", "M"] },
  { id: 32, brand: "Biba", name: "Women Cotton Printed Salwar Suit", price: 2999, originalPrice: 4999, discount: 40, category: "women", rating: 4.4, reviews: "2.1k", image: "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Daily wear comfort.", sizes: ["S", "M", "L"] },
  { id: 33, brand: "Vero Moda", name: "Women Floral Wrap Dress", price: 2199, originalPrice: 3499, discount: 37, category: "women", rating: 4.3, reviews: "800", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Perfect summer dress.", sizes: ["S", "M", "L"] },
  { id: 34, brand: "Only", name: "Women High-Rise Mom Jeans", price: 1799, originalPrice: 2999, discount: 40, category: "women", rating: 4.5, reviews: "1.4k", image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Retro style mom jeans.", sizes: ["26", "28", "30", "32"] },
  { id: 35, brand: "Zara", name: "Women Satin Slip Top", price: 1499, originalPrice: 1999, discount: 25, category: "women", rating: 4.2, reviews: "600", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Silky smooth satin.", sizes: ["S", "M"] },
  { id: 36, brand: "Anouk", name: "Women Hand-Block Print Saree", price: 1299, originalPrice: 3499, discount: 63, category: "women", rating: 4.6, reviews: "5.2k", image: "https://images.unsplash.com/photo-1610030469668-935142b9cde5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Traditional block print.", sizes: ["Free Size"] },
  { id: 37, brand: "H&M", name: "Women Ribbed Turtleneck Sweater", price: 1999, originalPrice: 2499, discount: 20, category: "women", rating: 4.7, reviews: "900", image: "https://images.unsplash.com/photo-1583912267670-65ca5ad98f6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Warm and cozy.", sizes: ["XS", "S", "M", "L"] },
  { id: 38, brand: "Sangria", name: "Women Ethnic Jumpsuit", price: 1599, originalPrice: 2999, discount: 46, category: "women", rating: 4.4, reviews: "1.1k", image: "https://images.unsplash.com/photo-1609132718484-93e1150529d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Fusion ethnic look.", sizes: ["S", "M", "L"] },
  { id: 39, brand: "Fabindia", name: "Women Silk Blend Kurta", price: 4500, originalPrice: 5500, discount: 18, category: "women", rating: 4.8, reviews: "450", image: "https://images.unsplash.com/photo-1610030469611-370163351ec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Natural silk texture.", sizes: ["S", "M", "L", "XL"] },
  { id: 40, brand: "Puma", name: "Women Yoga Leggings", price: 2199, originalPrice: 2999, discount: 26, category: "women", rating: 4.5, reviews: "2.8k", image: "https://images.unsplash.com/photo-1506629082928-19274bbad3a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Stretchable workout gear.", sizes: ["S", "M", "L"] },
  { id: 41, brand: "Forever 21", name: "Women Crop Top", price: 799, originalPrice: 1299, discount: 38, category: "women", rating: 4.1, reviews: "3.2k", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Cool and trendy.", sizes: ["XS", "S", "M"] },
  { id: 42, brand: "Guess", name: "Women Evening Clutches", price: 4999, originalPrice: 6999, discount: 28, category: "women", rating: 4.7, reviews: "120", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Sparkle in the dark.", sizes: ["One Size"] },

  // KIDS (31-45)
  { id: 11, brand: "Gini & Jony", name: "Boys Graphic Print T-shirt", price: 599, originalPrice: 999, discount: 40, category: "kids", rating: 4.2, reviews: "560", image: "https://images.unsplash.com/photo-1519235108626-48358bd7d700?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Fun graphic print.", sizes: ["2-3Y", "4-5Y", "6-7Y"] },
  { id: 12, brand: "U.S. Polo Assn. Kids", name: "Girls Polka Dot Fit & Flare Dress", price: 1299, originalPrice: 1999, discount: 35, category: "kids", rating: 4.4, reviews: "430", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Adorable polka dots.", sizes: ["3-4Y", "5-6Y", "7-8Y"] },
  { id: 13, brand: "Mothercare", name: "Infant Boys Cotton Dungarees", price: 1599, originalPrice: 2299, discount: 30, category: "kids", rating: 4.7, reviews: "210", image: "https://images.unsplash.com/photo-1522771935876-2497116a7a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Comfortable cotton.", sizes: ["6-12M", "12-18M", "18-24M"] },
  { id: 43, brand: "Hopscotch", name: "Kids Party Wear Jumpsuit", price: 1799, originalPrice: 2499, discount: 28, category: "kids", rating: 4.3, reviews: "150", image: "https://images.unsplash.com/photo-1519457431-75514b723006?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Ready for celebrations.", sizes: ["4-5Y", "6-7Y"] },
  { id: 44, brand: "Max", name: "Boys Hooded Sweatshirt", price: 799, originalPrice: 1299, discount: 38, category: "kids", rating: 4.2, reviews: "800", image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Winter essential.", sizes: ["6-7Y", "8-9Y"] },
  { id: 45, brand: "Nike Kids", name: "Kids Revolution Running Shoes", price: 3495, originalPrice: 4295, discount: 18, category: "kids", rating: 4.6, reviews: "500", image: "https://images.unsplash.com/photo-1514989125330-e32049ec0691?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Lightweight sneakers.", sizes: ["11", "12", "13"] },
  { id: 46, brand: "Peppermint", name: "Girls Tiered Skirt", price: 999, originalPrice: 1599, discount: 37, category: "kids", rating: 4.4, reviews: "320", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Playful tiers.", sizes: ["5-6Y", "7-8Y"] },
  { id: 47, brand: "LilPicks", name: "Boys Ethnic Vest & Kurta", price: 2199, originalPrice: 2999, discount: 26, category: "kids", rating: 4.5, reviews: "120", image: "https://images.unsplash.com/photo-1519235108626-48358bd7d700?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Traditional charm.", sizes: ["4-5Y", "6-7Y"] },
  // ... more kids items to reach 80 later

  // HOME & LIVING (46-60)
  { id: 14, brand: "D'Decor", name: "Set of 2 Geometric Print Cushion Covers", price: 899, originalPrice: 1499, discount: 40, category: "home-living", rating: 4.5, reviews: "1.2k", image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Modern touch.", sizes: ["16x16"] },
  { id: 15, brand: "Bombay Dyeing", name: "King Size Cotton Bedspread", price: 2499, originalPrice: 3999, discount: 37, category: "home-living", rating: 4.4, reviews: "890", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Premium cotton.", sizes: ["King"] },
  { id: 16, brand: "@home", name: "Artificial Desktop Plant", price: 499, originalPrice: 799, discount: 38, category: "home-living", rating: 4.6, reviews: "2.5k", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Maintenance-free greenery.", sizes: ["Medium"] },
  { id: 48, brand: "Swayam", name: "Kitchen Apron Set", price: 599, originalPrice: 999, discount: 40, category: "home-living", rating: 4.2, reviews: "1.1k", image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Chef's choice.", sizes: ["One Size"] },
  { id: 49, brand: "Trident", name: "Pack of 4 Cotton Bath Towels", price: 1299, originalPrice: 1999, discount: 35, category: "home-living", rating: 4.4, reviews: "3.2k", image: "https://images.unsplash.com/photo-1583947581924-860bda6a26df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Soft and absorbent.", sizes: ["Large"] },
  { id: 50, brand: "Portico", name: "Floral Print Curtain Set", price: 1599, originalPrice: 2499, discount: 36, category: "home-living", rating: 4.3, reviews: "950", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Brighten your room.", sizes: ["7ft", "9ft"] },
  { id: 51, brand: "Kurl-on", name: "Memory Foam Pillow", price: 1499, originalPrice: 2199, discount: 31, category: "home-living", rating: 4.7, reviews: "2.8k", image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Ergonomic support.", sizes: ["Standard"] },

  // BEAUTY (61-75)
  { id: 17, brand: "MAC", name: "Matte Lipstick - Velvet Teddy", price: 1950, originalPrice: 2150, discount: 9, category: "beauty", rating: 4.8, reviews: "15k", image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Iconic matte lipstick.", sizes: ["3g"] },
  { id: 18, brand: "Forest Essentials", name: "Ayurvedic Night Repair Cream", price: 2850, originalPrice: 3200, discount: 11, category: "beauty", rating: 4.7, reviews: "3.2k", image: "https://images.unsplash.com/photo-1556228578-8c19322da673?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Luxury Ayurvedic skincare with pure essential oils.", sizes: ["50g"] },
  { id: 19, brand: "The Body Shop", name: "British Rose Shower Gel", price: 395, originalPrice: 595, discount: 33, category: "beauty", rating: 4.5, reviews: "8.1k", image: "https://images.unsplash.com/photo-1559594861-16386c697e66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Infused with the essence of hand-picked British roses.", sizes: ["250ml"] },
  { id: 52, brand: "Lakme", name: "9to5 Weightless Mousse Foundation", price: 475, originalPrice: 550, discount: 13, category: "beauty", rating: 4.2, reviews: "12k", image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Ultra-lightweight foundation for a natural look.", sizes: ["30g"] },
  { id: 53, brand: "Maybelline", name: "Colossal Waterproof Mascara", price: 350, originalPrice: 499, discount: 30, category: "beauty", rating: 4.5, reviews: "25k", image: "https://images.unsplash.com/photo-1591360236440-995702f45f94?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Waterproof formula for colossal lashes.", sizes: ["9ml"] },
  { id: 54, brand: "L'Oreal", name: "Hyaluron Expert Serum", price: 899, originalPrice: 1299, discount: 30, category: "beauty", rating: 4.6, reviews: "5.4k", image: "https://images.unsplash.com/photo-1620916566398-39f114387c9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Advanced hydration with hyaluronic acid.", sizes: ["30ml"] },

  // FOOTWEAR (76-90)
  { id: 4, brand: "Nike", name: "Air Zoom Pegasus 38", price: 9495, originalPrice: 11495, discount: 17, category: "footwear", rating: 4.7, reviews: "890", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Responsive cushioning for everyday runs.", sizes: ["7", "8", "9", "10", "11"] },
  { id: 6, brand: "Puma", name: "Unisex Suede Classic Sneakers", price: 3499, originalPrice: 5999, discount: 41, category: "footwear", rating: 4.5, reviews: "2.8k", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "The iconic sneaker that defines cool.", sizes: ["6", "7", "8", "9", "10"] },
  { id: 20, brand: "Adidas", name: "Men Ultraboost 22 Running Shoes", price: 11999, originalPrice: 17999, discount: 33, category: "footwear", rating: 4.8, reviews: "1.4k", image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Energy-returning running shoes.", sizes: ["8", "9", "10"] },
  { id: 55, brand: "Skechers", name: "Men GoWalk Max-Clinched", price: 3999, originalPrice: 4999, discount: 20, category: "footwear", rating: 4.6, reviews: "4.2k", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Ultimate comfort for walking.", sizes: ["7", "8", "9"] },
  { id: 56, brand: "Crocs", name: "Unisex Adult White Clogs", price: 2995, originalPrice: 3495, discount: 14, category: "footwear", rating: 4.4, reviews: "10k", image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", description: "Lightweight and breathable footwear.", sizes: ["5", "6", "7", "8", "9"] },

  // Generative fillers (IDs 100+) using category-specific high-res Unsplash pools
  ...Array.from({ length: 60 }).map((_, i) => {
    const categories = ["men", "women", "kids", "home-living", "beauty", "footwear"];
    const category = categories[i % categories.length];
    
    const imagePool = {
      men: [
        '1505022662052-a72250ae4b30', '1617135670973-61323381486c', '1490578474895-699cd4e2cf59', '1512436991641-6745cdb1723f', '1488161628813-f4460f896d81'
      ],
      women: [
        '1496747611176-843222e1e57c', '1539109136881-3be0616acf4b', '1492724724894-7464c27d0ceb', '1585487000160-6ebcfceb0d03', '1515886657613-9f3515b0c78f'
      ],
      kids: [
        '1519457431-75514b723006', '1503944583220-79d8926ad5e2', '1519235108626-48358bd7d700', '1622244099802-9441017ef84d', '1514090458221-65bb69cf63e6'
      ],
      "home-living": [
        '1513519245088-0e12902e35a6', '1583947215259-38e31be8751f', '1522771739844-6a9f6d5f14af', '1584132967334-10e028bd69f7', '1556228578-8c19322da673'
      ],
      beauty: [
        '1512496015851-a90fb38ba796', '1591360236440-995702f45f94', '1620916566398-39f114387c9b', '1522338222348-18e001850720', '1596704017254-9b121068fb21'
      ],
      footwear: [
        '1542291026-7eec264c27ff', '1539185441755-769473a23570', '1560769629-975ec94e6a86', '1595341888016-a392ef81b7de', '1515955611488-8e6d97f5ded7'
      ]
    };

    const brands = ["Roadster", "H&M", "Zara", "Nike", "Adidas", "Puma", "Levis", "Jack & Jones", "Mango", "Libas"];
    const pool = imagePool[category];
    const imageId = pool[i % pool.length];

    return {
      id: 100 + i,
      brand: brands[i % brands.length],
      name: `Premium ${category.charAt(0).toUpperCase() + category.slice(1)} ${["Essential", "Classic", "Trendy", "Luxury", "Standard"][i % 5]} Item`,
      price: 599 + (i * 123) % 4000,
      originalPrice: 1599 + (i * 123) % 4000,
      discount: 20 + (i % 50),
      category: category,
      rating: (4.0 + (i % 10) / 10).toFixed(1),
      reviews: `${(i + 1) * 324}`,
      image: `https://images.unsplash.com/photo-${imageId}?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80`,
      description: "Sophisticated design with focus on comfort and durability.",
      sizes: category === "footwear" ? ["7", "8", "9", "10"] : category === "home-living" ? ["One Size"] : ["S", "M", "L", "XL"]
    };
  })
];

export const products = productsData;