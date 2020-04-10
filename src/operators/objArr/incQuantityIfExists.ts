import { pipe, tap } from "../utils";
import { filter } from "../array";
import { Stockable } from "./objArr.models";

export const incQuantityIfExists = <T extends Stockable>(newObj: T) => (
  inputArr: Array<T>
) =>
  pipe(
    filter(el => el.id === newObj.id),
    tap((data: any) => {
      if (data.length === 0) {
        inputArr.push(newObj);
        return inputArr;
      } else {
        data[0].quantity = newObj.quantity + data[0].quantity;
        return data;
      }
    })
  )(inputArr);
