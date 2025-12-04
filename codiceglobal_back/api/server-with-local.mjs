import { createApp } from "./index.mjs";
import { ProductModel } from "./models/product.mjs";
import { AuthModel } from "./models/auth.mjs";

const app = createApp({
    productModel: ProductModel,
    authModel: AuthModel,
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => console.log("API running"));
export default app;
