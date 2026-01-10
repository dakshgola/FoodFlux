const mongoose = require('mongoose');
require('dotenv').config();

const Food = require('./src/models/food.model');

// CORRECT VIDEO FILENAMES (from your videos folder)
const foodReels = [
  {
    name: "Amazing Pasta Recipe",
    video: "/videos/1583289-hd_712_1366_20fps.mp4",
    description: "Learn how to make delicious creamy pasta at home with this easy recipe",
    likeCount: 1250,
    savesCount: 340
  },
  {
    name: "Spicy Chicken Biryani",
    video: "/videos/3198245-hd_720_1280_50fps.mp4",
    description: "Authentic Hyderabadi biryani recipe with juicy chicken and aromatic spices",
    likeCount: 3400,
    savesCount: 890
  },
  {
    name: "Chocolate Lava Cake",
    video: "/videos/3298011-hd_1080_2048_25fps.mp4",
    description: "Decadent molten chocolate dessert that melts in your mouth",
    likeCount: 2100,
    savesCount: 560
  },
  {
    name: "Sizzling Burger Combo",
    video: "/videos/4058071-hd_1080_2048_25fps.mp4",
    description: "Juicy beef burger with crispy fries and special sauce",
    likeCount: 1800,
    savesCount: 420
  },
  {
    name: "Healthy Buddha Bowl",
    video: "/videos/5900834-hd_1080_2048_25fps.mp4",
    description: "Nutritious quinoa bowl with fresh vegetables and tahini dressing",
    likeCount: 950,
    savesCount: 320
  },
  {
    name: "Crispy Fried Chicken",
    video: "/videos/6202680-hd_1080_1920_25fps.mp4",
    description: "Perfectly seasoned and fried chicken wings with a crispy coating",
    likeCount: 2800,
    savesCount: 670
  }
];

async function seedDatabase() {
  try {
    console.log('🔄 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB!');
    
    console.log('🗑️  Clearing existing food items...');
    const deleted = await Food.deleteMany({});
    console.log(`   Deleted ${deleted.deletedCount} items`);
    
    console.log('📝 Adding correct food reels...');
    const result = await Food.insertMany(foodReels);
    console.log(`✅ Successfully added ${result.length} food reels!`);
    
    console.log('\n🎉 Database seeded with CORRECT video paths!');
    console.log('📱 Refresh your browser at http://localhost:5173\n');
    
    await mongoose.connection.close();
    console.log('🔌 Connection closed');
    process.exit(0);
  } catch (error) {
    console.error('\n❌ Error:', error.message);
    await mongoose.connection.close();
    process.exit(1);
  }
}

console.log('🚀 Starting seed script with correct video paths...\n');
seedDatabase();