# Online Store API Design Specification

### Step 1: Conceptual Setup
* Resources: products, orders, users
* Base URI: https://api.store.com/v1/

---

### Step 2: Read Operations (GET)
* Retrieve Collection: GET /v1/products
* Retrieve Single Resource: GET /v1/products/:id (Example: /v1/products/101)
* Filtering & Pagination: GET /v1/products?category=electronics&sort=price_asc&limit=10

---

### Step 3: Write Operations (POST & DELETE)
* Create Resource: POST /v1/orders
* Remove Resource: DELETE /v1/orders/:id

---

### Step 4: Hierarchy & Nested Resources
* Parent-Child Relationship: GET /v1/users/:userId/orders
* Product Reviews: GET /v1/products/:productId/reviews

---

### Step 5: HTTP Status Codes Mapping
- Successful Request: 200 OK
- Resource Created: 201 Created
- Bad Syntax / Validation Error: 400 Bad Request
- Resource Not Found: 404 Not Found
- Server-Side Failure: 500 Internal Server Error