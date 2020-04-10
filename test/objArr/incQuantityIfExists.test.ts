import { incQuantityIfExists, Stockable } from "../../src/operators";

let basket = [];
let newProduct = <Stockable>{};
let basketWithItem = [];
let newerProduct = <Stockable>{};

beforeEach(() => {
  basket = [];

  basketWithItem = [
    {
      quantity: 1,
      id: "f240d914-afd9-4e57-a533-de179d13864c"
    }
  ];

  newProduct = {
    quantity: 1,
    id: "f240d914-afd9-4e57-a533-de179d13864c"
  };

  newerProduct = {
    quantity: 12,
    id: "f240d914-afd9-4e57-a533-de179d13864c"
  };
});

test("operators - objArr - incQuantityIfExists: Add new product", () => {
  expect(incQuantityIfExists(newProduct)(basket)).toEqual([
    {
      quantity: 1,
      id: "f240d914-afd9-4e57-a533-de179d13864c"
    }
  ]);
});

test("operators - objArr - incQuantityIfExists: Add new existing", () => {
  expect(incQuantityIfExists(newProduct)(basketWithItem)).toEqual([
    {
      quantity: 2,
      id: "f240d914-afd9-4e57-a533-de179d13864c"
    }
  ]);

  expect(incQuantityIfExists(newerProduct)(basketWithItem)).toEqual([
    {
      quantity: 14,
      id: "f240d914-afd9-4e57-a533-de179d13864c"
    }
  ]);
});
