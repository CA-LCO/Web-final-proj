import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


export const fetchProducts = createAsyncThunk(
  "multiCart/fetchProducts",
  async () => {
    const res = await axios.get(URL);
    return res.data;
  }
);

export const changeLike = createAsyncThunk(
  "multiCart/changeLike",
  async (updateItem) => {
    const { item, data } = updateItem;
    const res = await axios.put(URL + item.id, { ...item, ...data });
    return res.data;
  }
);

export const changeCount = createAsyncThunk(
  "multiCart/changeCount",
  async (updateItem) => {
    const { item, data } = updateItem;

    const res = await axios.put(URL + item.id, { ...item, ...data });
    return res.data;
  }
);

const initialState = {
  items: [],
  filterItems: [],
  cartItems: [],
  likeItems: [],
  // comments: [],
  temp: [],
  loading: "",
  error: "",
  filterValues: {
    size: "ALL",
    sort: "",
    price: null,
  },
};

const clothingSlice = createSlice({
  name: "multiCart",
  initialState,
  reducers: {
    setFilterSize: (state, action) => {
      state.filterValues.size = action.payload;
    },
    setFilterSort: (state, action) => {
      state.filterValues.sort = action.payload;
    },
    setFilterPrice: (state, action) => {
      state.filterValues.price = action.payload;
    },
    // addComment: (state, action) => {
    //   state.comments.push(action.payload);
    // },

    handleSetFilteritems: (state) => {
      state.filterItems = [...state.temp];
    },
    handleFilterBySize: (state, action) => {
      state.temp = [...state.items];
      if (
        state.filterValues.size.toLowerCase() !== "all" &&
        state.filterValues.size !== ""
      ) {
        state.temp = state.temp.filter((item) =>
          item.availableSizes.includes(state.filterValues.size)
        );
      }
    },
    handleFilterByPrice: (state, action) => {
      state.temp = state.temp.filter(
        (p) => p.price <= parseFloat(state.filterValues.price)
      );
    },

    // handleReplyComment: (state, action) => {
    //   let temp = [...state.comments];
    //   let p = action.payload;
    //   nestedReplyComment(temp, p);
    //   state.comments = [...temp];
    // },
    handleFilterBySort: (state, action) => {
      state.temp.sort((a, b) => {
        if (state.filterValues.sort.toLowerCase() === "ascending") {
          if (a.price > b.price) return 1;
          return -1;
        } else if (state.filterValues.sort.toLowerCase() === "descending") {
          if (a.price < b.price) return 1;
          return -1;
        } else {
          if (a.id > b.id) return 1;
          return -1;
        }
      });
    },
  },
  extraReducers: {
    // Section fetch data
    [fetchProducts.pending]: (state) => {
      state.loading = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      state.items = [...action.payload];
      state.filterItems = [...action.payload];

      const tempLike = state.items.filter((item) => item.isLike === true);
      state.likeItems = [...tempLike];

      const tempCart = state.items.filter((item) => item.count > 0);
      state.cartItems = [...tempCart];
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = "faild";
      state.error = action.error.message;
    },



    // Section like items
    [changeLike.fulfilled]: (state, action) => {
      state.loading = "succeeded";
      if (action.payload.isLike) {
        state.likeItems.push(action.payload);
      } else {
        const newCartItems = state.likeItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.likeItems = [...newCartItems];
      }

      const index = state.filterItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.filterItems[index]) state.filterItems[index] = action.payload;

      const index1 = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[index1]) state.items[index1] = action.payload;
    },

    // Section cart items
    [changeCount.fulfilled]: (state, action) => {
      if (action.payload.count === 0) {
        const tempCartItem = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = [...tempCartItem];
      }

      if (action.payload.count >= 1) {
        const inCart = state.cartItems.some(
          (item) => item.id === action.payload.id
        );

        if (inCart) {
          const index = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
          if (state.cartItems[index]) state.cartItems[index] = action.payload;
        } else {
          state.cartItems.push(action.payload);
        }
      }

      const index = state.filterItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.filterItems[index]) state.filterItems[index] = action.payload;
      const index1 = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.items[index1]) state.items[index1] = action.payload;
    },
  },
});

export const allState = (state) => state.shop;
export const {
  handleCart,
  handleLike,
  handleDeleteItem,
  handle_Increase_Decrease,
  handleFilterBySize,
  handleFilterBySort,
  handleFilterByPrice,
  handleDeleteLikeItem,
  // handleReplyComment,
  // addComment,
  handleSetFilteritems,
  setFilterSize,
  setFilterPrice,
  setFilterSort,
} = clothingSlice.actions;
export default clothingSlice.reducer;
