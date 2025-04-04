import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Hero Section
const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  const images = ["hero1.jpeg", "hero1.jpeg", "hero1.jpeg", "hero1.jpeg"];
  const totalSlides = images.length;

  const handleSlideChange = (direction) => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    let newIndex = currentIndex + direction;

    if (newIndex < 0) newIndex = totalSlides - 1;
    if (newIndex >= totalSlides) newIndex = 0;

    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  return (
    <div className="relative w-full h-[400px] overflow-hidden mt-20">
      <div className="flex absolute left-0 animate-slideshow">
        <img src="images/hero1.jpeg" className="w-full h-full object-cover flex-shrink-0" alt="Hero 1" />
        <img src="images/hero1.jpeg" className="w-full h-full object-cover flex-shrink-0" alt="Hero 2" />
        <img src="images/hero1.jpeg" className="w-full h-full object-cover flex-shrink-0" alt="Hero 3" />
        <img src="images/hero1.jpeg" className="w-full h-full object-cover flex-shrink-0" alt="Hero 4" />
      </div>
    </div>
  );
};

// Explore Section
const ExploreSection = () => {
  const exploreItems = [
    {
      title: "New Arrivals",
      description: "Check out our latest collections",
      images: [
        { src: "topPicks1.jpg", name: "Summer Dress", link: "/product/summer-dress" },
        { src: "topPicks2.jpg", name: "Casual Shirt", link: "/product/casual-shirt" },
        { src: "topPicks3.jpg", name: "Denim Jeans", link: "/product/denim-jeans" },
        { src: "topPicks4.jpg", name: "Sports Shoes", link: "/product/sports-shoes" }
      ],
      bgColor: "bg-[#eceaea]"
    },
    {
      title: "Best Sellers",
      description: "Most popular items this season",
      images: [
        { src: "topPicks5.jpg", name: "Smart Watch", link: "/product/smart-watch" },
        { src: "topPicks6.jpg", name: "Headphones", link: "/product/headphones" },
        { src: "topPicks7.jpg", name: "Backpack", link: "/product/backpack" },
        { src: "topPicks8.jpg", name: "Sunglasses", link: "/product/sunglasses" }
      ],
      bgColor: "bg-[#eceaea]"
    },
    {
      title: "Special Offers",
      description: "Exclusive deals just for you",
      images: [
        { src: "topPicks1.jpg", name: "Winter Coat", link: "/product/winter-coat" },
        { src: "topPicks2.jpg", name: "Running Shoes", link: "/product/running-shoes" },
        { src: "topPicks3.jpg", name: "Leather Bag", link: "/product/leather-bag" },
        { src: "topPicks4.jpg", name: "Designer Watch", link: "/product/designer-watch" }
      ],
      bgColor: "bg-[#eceaea]"
    }
  ];

  return (
    <div className="w-full mb-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {exploreItems.map((item, index) => (
          <div key={index} className={`${item.bgColor} p-5 shadow-lg transition-shadow`}>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {item.images.map((img, imgIndex) => (
                <Link
                  to={img.link}
                  key={imgIndex}
                  className="group relative h-40 overflow-hidden rounded-lg"
                >
                  <img
                    src={`images/${img.src}`}
                    alt={img.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#504B38] bg-opacity-90 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium truncate">{img.name}</p>
                  </div>
                </Link>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Offers Section
const OffersSection = () => {
  const offerItems = [
    {
      title: "Flash Sale 🔥",
      description: "24 Hours Only - Up to 70% Off",
      images: [
        { src: "topPicks1.jpg", name: "Gaming Laptops - 40% Off", link: "/offer/gaming-laptops" },
        { src: "topPicks2.jpg", name: "Phones - Save ₹20,000", link: "/offer/phones" },
        { src: "topPicks3.jpg", name: "TVs - Starting ₹29,999", link: "/offer/tvs" },
        { src: "topPicks4.jpg", name: "Audio Devices - 60% Off", link: "/offer/audio" }
      ],
      bgColor: "bg-[#eceaea]"
    },
    {
      title: "Combo Deals 🎁",
      description: "Buy More Save More",
      images: [
        { src: "topPicks5.jpg", name: "Phone + Watch Bundle", link: "/offer/phone-bundle" },
        { src: "topPicks6.jpg", name: "Gaming Console + 3 Games", link: "/offer/gaming-bundle" },
        { src: "topPicks7.jpg", name: "Laptop + Accessories", link: "/offer/laptop-bundle" },
        { src: "topPicks8.jpg", name: "Camera + Lens Kit", link: "/offer/camera-bundle" }
      ],
      bgColor: "bg-[#eceaea]"
    },
    {
      title: "Clearance Sale ⚡",
      description: "Last Chance to Buy",
      images: [
        { src: "topPicks1.jpg", name: "Up to 80% Off Electronics", link: "/offer/clearance-electronics" },
        { src: "topPicks2.jpg", name: "Fashion Under ₹999", link: "/offer/clearance-fashion" },
        { src: "topPicks3.jpg", name: "Home Appliances Sale", link: "/offer/clearance-appliances" },
        { src: "topPicks4.jpg", name: "Accessories From ₹299", link: "/offer/clearance-accessories" }
      ],
      bgColor: "bg-[#eceaea]"
    },
    {
      title: "Student Offers 📚",
      description: "Special Discounts with Student ID",
      images: [
        { src: "topPicks5.jpg", name: "Laptops - Extra 10% Off", link: "/offer/student-laptops" },
        { src: "topPicks6.jpg", name: "Study Tablets From ₹15,999", link: "/offer/student-tablets" },
        { src: "topPicks7.jpg", name: "Educational Software Deals", link: "/offer/student-software" },
        { src: "topPicks8.jpg", name: "Study Accessories Bundle", link: "/offer/student-accessories" }
      ],
      bgColor: "bg-[#eceaea]"
    },
    {
      title: "Bank Offers 💳",
      description: "Extra Discounts on Bank Cards",
      images: [
        { src: "topPicks1.jpg", name: "10% Off on HDFC Cards", link: "/offer/hdfc-offers" },
        { src: "topPicks2.jpg", name: "SBI Card EMI Offers", link: "/offer/sbi-offers" },
        { src: "topPicks3.jpg", name: "ICICI Bank Deals", link: "/offer/icici-offers" },
        { src: "topPicks4.jpg", name: "Axis Bank Benefits", link: "/offer/axis-offers" }
      ],
      bgColor: "bg-[#eceaea]"
    },
    {
      title: "Exchange Offers ♻️",
      description: "Best Value for Your Old Devices",
      images: [
        { src: "topPicks5.jpg", name: "Phone Exchange - Save ₹15,000", link: "/offer/phone-exchange" },
        { src: "topPicks6.jpg", name: "Laptop Exchange Deals", link: "/offer/laptop-exchange" },
        { src: "topPicks7.jpg", name: "TV Exchange Offers", link: "/offer/tv-exchange" },
        { src: "topPicks8.jpg", name: "Tablet Exchange Program", link: "/offer/tablet-exchange" }
      ],
      bgColor: "bg-[#eceaea]"
    }
  ];

  return (
    <div className="w-full mb-6 p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Special Offers</h2>
      <p className="text-center text-gray-600 mb-6">Exclusive deals and discounts for our customers</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offerItems.map((item, index) => (
          <div key={index} className={`${item.bgColor} p-5 shadow-lg hover:shadow-xl transition-shadow`}>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {item.images.map((img, imgIndex) => (
                <Link
                  to={img.link}
                  key={imgIndex}
                  className="group relative h-40 overflow-hidden rounded-lg"
                >
                  <img
                    src={`images/${img.src}`}
                    alt={img.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#504B38] bg-opacity-90 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium truncate">{img.name}</p>
                  </div>
                </Link>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// TopPicks Section
const TopPicks = () => {
  const topPickImages = ["topPicks1.jpg", "topPicks2.jpg", "topPicks3.jpg", "topPicks4.jpg", "topPicks5.jpg", "topPicks6.jpg", "topPicks7.jpg", "topPicks8.jpg", "topPicks9.jpg"];
  return (
    <div className="w-full p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Top picks</h2>
      <div className="flex overflow-x-auto gap-3 pb-4 px-2">
        {topPickImages.map((img, index) => (
          <div
            key={index}
            className="flex-none w-48 min-w-[12rem] bg-[#EBE5C2] rounded-lg shadow-md overflow-hidden home-container"
          >
            <div className="h-48 overflow-hidden p-2">
              <img
                src={`images/${img}`}
                alt={`Top Pick ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 rounded-lg"
              />
            </div>
            <div className="p-2">
              <h3 className="text-base font-semibold truncate">Top Pick {index + 1}</h3>
              <p className="text-xs line-clamp-2">Up to 50% off on bulk orders.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Categories Section
const Categories = () => {
  const categories = [
    {
      name: "Electronics",
      icon: "💻",
      subCategories: ["Phones", "Laptops", "TVs", "Audio"],
      itemCount: "50K+ Products",
      link: "/category/electronics",
      gradient: "from-blue-500/10 to-blue-600/10"
    },
    {
      name: "Fashion",
      icon: "👔",
      subCategories: ["Men", "Women", "Kids", "Accessories"],
      itemCount: "35K+ Products",
      link: "/category/fashion",
      gradient: "from-pink-500/10 to-purple-600/10"
    },
    {
      name: "Home & Living",
      icon: "🏠",
      subCategories: ["Furniture", "Decor", "Kitchen", "Garden"],
      itemCount: "28K+ Products",
      link: "/category/home-living",
      gradient: "from-amber-500/10 to-yellow-600/10"
    },
    {
      name: "Beauty",
      icon: "✨",
      subCategories: ["Makeup", "Skincare", "Haircare", "Fragrances"],
      itemCount: "22K+ Products",
      link: "/category/beauty",
      gradient: "from-red-500/10 to-pink-600/10"
    },
    {
      name: "Sports & Fitness",
      icon: "🏃‍♂️",
      subCategories: ["Equipment", "Clothing", "Supplements", "Accessories"],
      itemCount: "15K+ Products",
      link: "/category/sports",
      gradient: "from-green-500/10 to-emerald-600/10"
    },
    {
      name: "Books & Media",
      icon: "📚",
      subCategories: ["Books", "eBooks", "Movies", "Music"],
      itemCount: "40K+ Products",
      link: "/category/books-media",
      gradient: "from-orange-500/10 to-red-600/10"
    },
    {
      name: "Automotive",
      icon: "🚗",
      subCategories: ["Parts", "Accessories", "Tools", "Care"],
      itemCount: "18K+ Products",
      link: "/category/automotive",
      gradient: "from-slate-500/10 to-gray-600/10"
    },
    {
      name: "Toys & Games",
      icon: "🎮",
      subCategories: ["Gaming", "Board Games", "Kids Toys", "Outdoor"],
      itemCount: "25K+ Products",
      link: "/category/toys-games",
      gradient: "from-indigo-500/10 to-blue-600/10"
    }
  ];

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Shop By Category</h2>
      <p className="text-center text-gray-600 mb-8">Explore our wide range of wholesale products</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            to={category.link}
            key={category.name}
            className={`p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all group bg-gradient-to-br ${category.gradient}`}
          >
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-[#504B38]">{category.name}</h3>
            <div className="text-xs text-gray-500 mb-3">{category.itemCount}</div>
            <div className="flex flex-wrap justify-center gap-2">
              {category.subCategories.map((sub, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/50 rounded-full text-xs text-gray-600"
                >
                  {sub}
                </span>
              ))}
            </div>
            <div className="mt-4 text-sm text-[#504B38] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Browse Category →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Featured Products Section
const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Apple iPhone 14 Pro",
      price: "₹1,19,999",
      originalPrice: "₹1,29,999",
      discount: "8% off",
      rating: 4.8,
      reviews: 2547,
      image: "topPicks1.jpg",
      badge: "New Launch",
      link: "/product/iphone-14-pro"
    },
    {
      id: 2,
      name: "Sony WH-1000XM4",
      price: "₹24,999",
      originalPrice: "₹29,999",
      discount: "17% off",
      rating: 4.9,
      reviews: 1823,
      image: "topPicks2.jpg",
      badge: "Best Seller",
      link: "/product/sony-wh1000xm4"
    },
    {
      id: 3,
      name: "Samsung 4K Smart TV",
      price: "₹49,999",
      originalPrice: "₹64,999",
      discount: "23% off",
      rating: 4.7,
      reviews: 958,
      image: "topPicks3.jpg",
      badge: "Deal of the Day",
      link: "/product/samsung-4k-tv"
    }
  ];

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Featured Products</h2>
      <p className="text-center text-gray-600 mb-6">Discover our top picks for you</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Link to={product.link} key={product.id} className="group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img
                  src={`images/${product.image}`}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <span className="absolute top-2 right-2 bg-[#504B38] text-white text-xs px-2 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#504B38] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold">{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  <span className="text-sm text-green-600 font-semibold">{product.discount}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Testimonials Section
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      title: "Verified Buyer ✓",
      rating: 5,
      date: "2 weeks ago",
      review: "Outstanding experience! The product quality exceeded my expectations. The delivery was quick, and the customer service team was extremely helpful. Will definitely shop again!",
      productBought: "iPhone 14 Pro",
      avatar: "customer1.jpg",
      location: "Mumbai, India",
      badges: ["Top Reviewer", "Early Adopter"]
    },
    {
      id: 2,
      name: "Rahul Verma",
      title: "Premium Member 🌟",
      rating: 5,
      date: "1 month ago",
      review: "The exchange offer was fantastic! Got a great deal on my new laptop. The process was smooth, and the staff was very professional. Highly recommended!",
      productBought: "MacBook Pro",
      avatar: "customer2.jpg",
      location: "Delhi, India",
      badges: ["Power User"]
    },
    {
      id: 3,
      name: "Anita Patel",
      title: "Regular Customer 💎",
      rating: 4,
      date: "3 weeks ago",
      review: "Been shopping here for years. The loyalty program benefits are amazing, and the product range keeps getting better. Super satisfied with recent purchases!",
      productBought: "Sony WH-1000XM4",
      avatar: "customer3.jpg",
      location: "Bangalore, India",
      badges: ["Loyal Customer"]
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      title: "Tech Enthusiast 🚀",
      rating: 5,
      date: "1 week ago",
      review: "The technical support team is outstanding! They helped me choose the perfect gaming setup. Competitive prices and genuine products. A+ service!",
      productBought: "Gaming PC Setup",
      avatar: "customer4.jpg",
      location: "Hyderabad, India",
      badges: ["Tech Expert"]
    }
  ];

  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold text-center mb-2">Customer Reviews</h2>
      <p className="text-center text-gray-600 mb-6">What our valued customers say about us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="bg-gradient-to-r from-[#929191] to-[#929191] text-white px-6 py-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">{review.date}</span>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-300">★</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-[#504B38] p-1">
                    <img
                      src={`images/${review.avatar}`}
                      alt={review.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 text-lg">✓</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.title}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                  <div className="flex gap-2 mt-1">
                    {review.badges.map((badge, index) => (
                      <span key={index} className="px-2 py-1 bg-[#504B38] bg-opacity-10 text-[#fff] text-xs rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">"{review.review}"</blockquote>
              <div className="flex items-center justify-between text-sm border-t pt-4">
                <div className="flex items-center text-gray-600">
                  <span className="font-medium">Purchased:</span>
                  <span className="ml-2 text-[#504B38]">{review.productBought}</span>
                </div>
                <button className="text-[#504B38] hover:underline">Helpful 👍</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/reviews"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#504B38] text-white rounded-lg hover:bg-[#635E48] transition-colors"
        >
          View All Reviews
          <span className="text-xl">→</span>
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="text-[#504B38]">
      <HeroSection />
      <main className="w-full px-5 mt-10">
        <ExploreSection />
        <OffersSection />
        <div className="w-full bg-[#eceaea] rounded-lg shadow-lg mb-6">
          <Categories />
        </div>
        <div className="w-full bg-[#eceaea] rounded-lg shadow-lg mb-6">
          <FeaturedProducts />
        </div>
        <div className="w-full bg-[#eceaea] rounded-lg shadow-lg mb-6 mt-6">
          <TopPicks />
        </div>
        <div className="w-full bg-[#eceaea] rounded-lg shadow-lg mb-6">
          <Testimonials />
        </div>
      </main>
    </div>
  );
};

export default Home;