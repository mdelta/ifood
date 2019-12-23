import { RemoteMongoClient } from "mongodb-stitch-browser-sdk";
import { app } from "./app";

const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  "mongodb-atlas-ifood"
);

const restaurants = mongoClient.db("ifood").collection("restaurants");
const orders = mongoClient.db("ifood").collection("orders");
const userprofiles = mongoClient.db("ifood").collection("userprofiles");

// export function watchItems() {
//   const streamPromise = items.watch();
//   const getStream = () => streamPromise;
//   const closeStream = () => streamPromise.then(stream => stream.close);
//   return [getStream, closeStream];
// }

export { restaurants, orders, userprofiles };
