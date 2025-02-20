import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const serverURL = import.meta.env.VITE_SERVER_URL;
//const serverURL = import.meta.env.VITE_TEST_SERVER;
const propertyURL = `${serverURL}properties`;

const initialState = {
  filters: {
    financeType: "",
    rentalYield: "",
    location: "",
  },
  filteredProperties: [],
  allProperies: [],
  search: "",
  notFound: false,
  status: "idle",
  error: undefined,
};

export const createProperty = createAsyncThunk(
  "property/createProperty",
  async (property) => {
    const response = await fetch(propertyURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });
    return await response.json();
  }
);

export const createDraftProperty = createAsyncThunk(
  "property/createDraftProperty",
  async (property) => {
    const newUrl = `${propertyURL}/draft`;
    const response = await fetch(newUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });
    return await response.json();
  }
);

export const fetchFilteredProperties = createAsyncThunk(
  "filter/fetchFilteredProperties",
  async (filters) => {
    const newUrl = `${propertyURL}/filter?${filters}`;
    const response = await fetch(newUrl);
    return await response.json();
  }
);

export const fetchAllProperties = createAsyncThunk(
  "property/fetchAllProperties",
  async () => {
    const response = await fetch(propertyURL);
    return await response.json();
  }
);

export const setPropertyStatus = createAsyncThunk(
  "property/setPropertyStatus",
  async ({ propertyId, isActive }) => {
    const body = { propertyId, isActive };
    const response = await fetch(`${propertyURL}/status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
);

export const withdrawFunds = createAsyncThunk(
  "property/withdrawFunds",
  async ({ propertyAddress, userAddress, propertyType }) => {
    const body = { propertyAddress, userAddress, propertyType };
    const response = await fetch(`${propertyURL}/withdraw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
);

export const editProperty = createAsyncThunk(
  "patch/editProperty",
  async ({ newFeatureData, propertyId }) => {
    const newURL = `${propertyURL}/edit/${propertyId}`;
    const response = await fetch(newURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeatureData),
    });
    return await response.json();
  }
);

export const editDraftProperty = createAsyncThunk(
  "patch/editDraftProperty",
  async ({ property, propertyId }) => {
    const newURL = `${propertyURL}/draft/edit/${propertyId}`;
    const response = await fetch(newURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(property),
    });
    return await response.json();
  }
);

export const deleteDraftProperty = createAsyncThunk(
  "delete/deleteDraftProperty",
  async ({ propertyId }) => {
    const newURL = `${propertyURL}/draft/delete/${propertyId}`;
    const response = await fetch(newURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.filteredProperties = [];
    },
  },
  extraReducers: (builder) => {
    const commonPendingAction = (state) => {
      state.status = "loading";
    };
    const commonFulfilledAction = (state, action) => {
      state.status = "succeeded";
    };
    const commonRejectedAction = (state, action) => {
      state.status = "failed";
    };
    builder
      .addCase(createProperty.pending, commonPendingAction)
      .addCase(createProperty.fulfilled, commonFulfilledAction)
      .addCase(createProperty.rejected, commonRejectedAction)

      .addCase(fetchFilteredProperties.pending, commonPendingAction)
      .addCase(fetchFilteredProperties.rejected, commonRejectedAction)
      .addCase(fetchFilteredProperties.fulfilled, (state, action) => {
        commonFulfilledAction(state, action);
        state.filteredProperties = action.payload;
      })

      .addCase(fetchAllProperties.pending, commonPendingAction)
      .addCase(fetchAllProperties.rejected, commonRejectedAction)
      .addCase(fetchAllProperties.fulfilled, (state, action) => {
        commonFulfilledAction(state, action);
        state.allProperies = action.payload;
      });
  },
});

export default propertySlice.reducer;
