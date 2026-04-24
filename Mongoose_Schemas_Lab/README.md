# Mongoose Schemas Lab
**Author:** Arvin

## Design Choices
- **Modular Structure:** Separated database connection logic (`db.js`) from model logic (`index.js`).
- **Validation:** Implemented custom error messages in the schema for better debugging.
- **Timestamps:** Enabled the `timestamps` option to automatically track record creation and updates.
- **Subdocuments:** Used a separate `dimensionSchema` to keep the code clean and reusable.