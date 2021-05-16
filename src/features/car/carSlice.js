import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: ["Model S", "Model 3", "Model X", "Model Y"],
    categories : ["EXISTING INVENTORY", "USED INVENTORY", "TRADE-IN", "CYBERTRUCK", "ROADSTER", "SEMI", "CHARGING", "POWERWALL", "COMMERCIAL ENERGY", "UTILITIES", "TEST DRIVE", "FIND US", "SUPPORT", "UNITED STATES"]
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
})

// const categorySlice = createSlice({
//     name: "category",
//     initialState,
//     reducers: {}
// })

export const selectCars = state => state.car.cars
export const selectCategories = state => state.category.categories

export default carSlice.reducer