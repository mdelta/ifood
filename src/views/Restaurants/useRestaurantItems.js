import React from "react";
import { restaurants } from "stitch";
import { watchRestaurants } from "stitch/mongodb"

const ifoodReducer = (state, { type, payload }) => {
  switch (type) {
    case "setIfoods": {
      return {
        ...state,
        hasHadIfoods: payload.ifoods.length > 0,
        ifoods: payload.ifoods || [],
      };
    }
    case "addIfood": {
      const newIfood = {
        ...payload,
        checked: typeof payload.checked === "boolean" ? payload.checked : false,
      };
      return {
        ...state,
        hasHadIfoods: true,
        ifoods: [...state.ifoods, newIfood],
      };
    }
    case "removeIfood": {
      const removeSpecifiedIfood = ifood => ifood.id !== payload.id;
      return {
        ...state,
        ifoods: state.ifoods.filter(removeSpecifiedIfood),
      };
    }    
    case "updateIfood": {
      const updatedIfood = payload;
      const updateIfood = ifood => {
        const isThisIfood = ifood._id.toString() === updatedIfood._id.toString();
        return isThisIfood ? updatedIfood : ifood;
      };
      return {
        ...state,
        ifoods: state.ifoods.map(updateIfood)
      }
    }
    default: {
      console.error(`Received invalid ifood action type: ${type}`);
    }
  }
};

export function useIfoodRestaurants(userId) {
  //
  const [state, dispatch] = React.useReducer(ifoodReducer, { ifoods: [] });
  // Ifood Actions
  const loadIfoods = async () => {
    const ifoods = await restaurants.find({}, { limit: 1000 }).asArray();
    dispatch({ type: "setIfoods", payload: { ifoods } });
  };
  const useWatchRestaurants = () => {
    const [getStream, closeStream] = watchRestaurants();
    React.useEffect(() => {
      getStream().then(stream => stream.onNext( (changeEvent) => {
        switch(changeEvent.operationType) {
          case "insert": {
            dispatch({ type: "addIfood", payload: changeEvent.fullDocument});
            break;
          }
          case "delete": {
            dispatch({ type: "removeIfood", payload: changeEvent.documentKey._id});
            break;
          }
          case "update": {
            dispatch({ type: "updateIfood", payload: changeEvent.fullDocument});
            break;
          }
        }
      } ));
      return closeStream;
    }, [])
  };
  const addIfood = async task => {
    const ifood = { task, owner_id: userId };
    const result = await restaurants.insertOne(ifood);
    //dispatch({ type: "addIfood", payload: { ...ifood, _id: result.insertedId } });
  };
  const removeIfood = async ifoodId => {
    await restaurants.deleteOne({ _id: ifoodId });
    //dispatch({ type: "removeIfood", payload: { id: ifoodId } });
  };

  React.useEffect(() => {
    loadIfoods();
    
  }, []);
  useWatchRestaurants();
  return {
    restaurants: state.ifoods,
    hasHadIfoods: state.hasHadIfoods,
    actions: {
      addIfood,
      removeIfood
    },
  };
}
