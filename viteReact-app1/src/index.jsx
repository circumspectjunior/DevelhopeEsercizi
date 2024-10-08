import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import APP from "./App"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <APP />
    </StrictMode>
)