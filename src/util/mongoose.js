module.exports = {
  multiMongoDB2Object: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  mongoDB2Object: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
