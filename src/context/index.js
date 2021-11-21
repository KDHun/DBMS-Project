import { createContext } from "react";

const authContext = createContext({ token: null, name: null, role: null });

export default authContext;
