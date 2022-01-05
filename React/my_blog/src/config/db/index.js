import mongoose from 'mongoose';

async function connect() {  
  try {
    await mongoose.connect('mongodb://localhost:27017/my_website',{
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('connect successfully')
  } catch (error) {
    console.log('connect failure')
  }
}

export default {connect};
