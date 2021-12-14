import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((rest) => {
    rest.photos = rest.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...rest,
      address: rest.vicinity,
      isOpenNow: rest.opening_hours && rest.opening_hours.open_now,
      isClosedTemporarily: rest.bussiness_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
