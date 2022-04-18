const { default: mongoose } = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CNN);
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error(
      "Error a la hora de iniciar la conexion con la base de datos"
    );
  }
};

module.exports = {
  dbConnection,
};