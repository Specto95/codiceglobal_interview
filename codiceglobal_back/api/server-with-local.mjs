
import { createApp } from "./index.mjs";
import { ProductModel } from "./models/product.mjs";
import { AuthModel } from "./models/auth.mjs";

try{
    console.log('starting back')

    const app = createApp({
        productModel: ProductModel,
        authModel: AuthModel,
    })
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, "0.0.0.0", () => console.log("API running on", PORT));
}catch(err){
    console.error('Error starting back', err)
    process.exit(1)
}

console.log('back started')


// export default app;
