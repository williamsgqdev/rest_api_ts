import mongoose from "mongoose";

import config from "config";

const connect = async () => {
  try {
    const db_url = config.get<string>("db_url");
    await mongoose.connect(db_url);

    console.log("DB connection established");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connect;
