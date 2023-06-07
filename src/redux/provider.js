"use client";

import {Provider} from "@reduxjs/toolkit"
import {store} from "./store"


export function Providers({children}) {
    return <Provider store={store}>
        {children}
    </Provider>
}