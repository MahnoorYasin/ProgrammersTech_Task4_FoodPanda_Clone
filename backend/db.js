const mongoose = require('mongoose');

const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/foodiee_mern', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');

        // Fetch data from the foodData collection
        const fetched_data = await mongoose.connection.db.collection("foodData").find({}).toArray();
        global.food_items = fetched_data;

        // Fetch data from the foodCategory collection
        const fetched_category = await mongoose.connection.db.collection("foodcategory").find({}).toArray();
        global.food_category = fetched_category;

       //console.log(global.food_items);
    //console.log(global.food_category);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = mongoDB;
