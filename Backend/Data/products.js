// REPLACE THE IMAGE URL TO A CORRECT ONE

const products = [
    {
        "name": "Apple iPhone 14 Pro Max",
        "description": "The latest iPhone with a 6.7-inch Super Retina XDR display, A16 Bionic chip, and advanced triple-camera system.",
        "category": "Electronics",
        "brand": "Apple",
        "price": "91,499",  
        "image": "https://example.com/images/iphone-14-pro-max.jpg",
        "qty": "500",
        "reviews": [
            {
                "name": "TechGuru",
                "rating": 5,
                "comment": "The camera and performance are exceptional, truly worth the upgrade!"
            },
            {
                "name": "SmartShopper",
                "rating": 4,
                "comment": "Great phone but battery life could use some improvement."
            }
        ]
    },
    {
        "name": "Samsung 55-inch 4K UHD Smart TV",
        "description": "A 55-inch 4K UHD smart TV with HDR, voice control, and built-in apps for Netflix, YouTube, and more.",
        "category": "Electronics",
        "brand": "Samsung",
        "price": "45,699", 
        "image": "https://example.com/images/samsung-4k-tv.jpg",
        "qty": "200",
        "reviews": [
            {
                "name": "MovieBuff123",
                "rating": 5,
                "comment": "Picture quality is stunning, perfect for movie nights!"
            },
            {
                "name": "TechFanatic",
                "rating": 4,
                "comment": "Great TV overall, but the sound could be better."
            }
        ]
    },
    {
        "name": "Dyson V11 Torque Drive Cordless Vacuum Cleaner",
        "description": "A powerful cordless vacuum with up to 60 minutes of run time, intelligent suction power, and advanced filtration.",
        "category": "Home Appliances",
        "brand": "Dyson",
        "price": "58,199",  
        "image": "https://example.com/images/dyson-v11.jpg",
        "qty": "300",
        "reviews": [
            {
                "name": "CleanFreak",
                "rating": 5,
                "comment": "This vacuum has incredible suction power and is super easy to use."
            },
            {
                "name": "HouseholdQueen",
                "rating": 4,
                "comment": "Great performance, but it's a bit heavy for prolonged use."
            }
        ]
    },
    {
        "name": "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
        "description": "A versatile electric pressure cooker that can also be used as a slow cooker, rice cooker, steamer, and yogurt maker.",
        "category": "Home Appliances",
        "brand": "Instant Pot",
        "price": "7,479", 
        "image": "https://example.com/images/instant-pot.jpg",
        "qty": "1000",
        "reviews": [
            {
                "name": "KitchenMaster",
                "rating": 5,
                "comment": "Perfect for making quick, delicious meals. A real game-changer!"
            },
            {
                "name": "BusyMom",
                "rating": 4,
                "comment": "Great for family meals, but it takes up a bit of counter space."
            }
        ]
    },
    {
        "name": "Fitbit Charge 5 Fitness and Health Tracker",
        "description": "A sleek fitness tracker with built-in GPS, heart rate monitor, and stress management tools.",
        "category": "Fitness",
        "brand": "Fitbit",
        "price": "14,949",  
        "image": "https://example.com/images/fitbit-charge-5.jpg",
        "qty": "400",
        "reviews": [
            {
                "name": "ActiveJoe",
                "rating": 5,
                "comment": "Fantastic tracker, I can monitor everything from heart rate to sleep quality!"
            },
            {
                "name": "FitnessFreak",
                "rating": 4,
                "comment": "Great for workouts, but the display could be brighter."
            }
        ]
    },
    {
        "name": "Adidas Running Shoes",
        "description": "High-performance running shoes with cushioned soles and breathable mesh upper.",
        "category": "Fitness",
        "brand": "Adidas",
        "price": "6,999", 
        "image": "https://example.com/images/adidas-running-shoes.jpg",
        "qty": "350",
        "reviews": [
            {
                "name": "ComfortRunner",
                "rating": 5,
                "comment": "These are the most comfortable running shoes I've ever worn!"
            },
            {
                "name": "RecoveryRun",
                "rating": 4,
                "comment": "Perfect for recovery runs, but they might not be the best for speedwork."
            }
        ]
    },
    {
        "name": "Levi's 501 Original Fit Jeans",
        "description": "Classic blue denim jeans with a straight-leg cut and signature Levi’s stitching.",
        "category": "Clothing",
        "brand": "Levi's",
        "price": "4,499", 
        "image": "https://example.com/images/levis-501-jeans.jpg", 
        "qty": "500",
        "reviews": [
            {
                "name": "StyleSeeker",
                "rating": 5,
                "comment": "Great fit and very stylish, they go with everything!"
            },
            {
                "name": "CasualWearer",
                "rating": 4,
                "comment": "Love the fit, but the denim feels a little stiff at first."
            }
        ]
    },
    {
        "name": "Nike Dri-FIT Training T-shirt",
        "description": "Lightweight, moisture-wicking training t-shirt designed for maximum performance.",
        "category": "Clothing",
        "brand": "Nike",
        "price": "1,999", 
        "image": "https://example.com/images/nike-dri-fit-shirt.jpg",
        "qty": "1000",
        "reviews": [
            {
                "name": "FitFanatic",
                "rating": 5,
                "comment": "Perfect for workouts, keeps me dry throughout!"
            },
            {
                "name": "GymJunkie",
                "rating": 4,
                "comment": "Very comfortable, but wish it came in more colors."
            }
        ]
    },
    {
        "name": "Olay Regenerist Micro-Sculpting Cream",
        "description": "Anti-aging cream designed to reduce wrinkles and firm skin, leaving your face smooth and radiant.",
        "category": "Daily Usage",
        "brand": "Olay",
        "price": "1,399",  
        "image": "https://example.com/images/olay-cream.jpg",
        "qty": "600",
        "reviews": [
            {
                "name": "GlowUp",
                "rating": 5,
                "comment": "My skin looks smoother and firmer after just a few weeks of use!"
            },
            {
                "name": "SkincareObsessed",
                "rating": 4,
                "comment": "Great for reducing fine lines, but it can feel greasy sometimes."
            }
        ]
    },
    {
        "name": "Gillette Fusion ProGlide Razor",
        "description": "Precision razor with five blades for a close shave, and a lubrication strip for comfort.",
        "category": "Daily Usage",
        "brand": "Gillette",
        "price": "799",  
        "image": "https://example.com/images/gillette-razor.jpg",
        "qty": "800",
        "reviews": [
            {
                "name": "SmoothShaver",
                "rating": 5,
                "comment": "The smoothest shave I've had in years, no nicks or cuts!"
            },
            {
                "name": "SharpEdge",
                "rating": 4,
                "comment": "Good razor, but the blades wear out a bit faster than I expected."
            }
        ]
    },
    {
        "name": "Moleskine Classic Notebook",
        "description": "Premium quality notebook with a hard cover, perfect for journaling and note-taking.",
        "category": "Stationery",
        "brand": "Moleskine",
        "price": "1,199", 
        "image": "https://example.com/images/moleskine-notebook.jpg",
        "qty": "1500",
        "reviews": [
            {
                "name": "NoteTaker",
                "rating": 5,
                "comment": "The paper quality is fantastic, perfect for writing and sketching."
            },
            {
                "name": "CreativeWriter",
                "rating": 4,
                "comment": "Beautiful notebook, but it could be a little thicker."
            }
        ]
    },
    {
        "name": "Pilot G2 Gel Pens (Pack of 5)",
        "description": "Smooth-flowing gel pens with a fine point for precise writing.",
        "category": "Stationery",
        "brand": "Pilot",
        "price": "199",  
        "image": "https://example.com/images/pilot-g2-pens.jpg",
        "qty": "3000",
        "reviews": [
            {
                "name": "SmoothWriter",
                "rating": 5,
                "comment": "These pens write like a dream, smooth and consistent."
            },
            {
                "name": "PenCollector",
                "rating": 4,
                "comment": "Great pens, but I wish the ink lasted a little longer."
            }
        ]
    }
]


export default products;

// const productSchema = new mongoose.Schema({
//     seller: {
//         type: mongoose.Schema.Types.ObjectId,
//         require: true,
//         ref: "User",
//     },
//     
//     reviews: [reviewSchema],
// }, {
//     timestamps: true,
// });
