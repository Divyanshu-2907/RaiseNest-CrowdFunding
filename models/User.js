// import mongoose from "mongoose";
// const {Schema, model} = mongoose

// const UserSchema = new Schema({
//     email: {type: String, required:true },
//     name: {type: String, required:true },
//     username: {type: String },
//     profilepic: {type: String },
//     coverpic: {type: String },
//     createdAt: {type: Date, default: Date.now },
//     updatedAt: {type: Date, default: Date.now },
    
// });

// export default mongoose.models.User || model("User", UserSchema);

import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
