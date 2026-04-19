import pool from "./config/database.js";
import app from "./app.js";


const startServer = async () => {
  try {
    await pool.query("SELECT 1");

    console.log("Database connected");

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });

  } catch (error) {
    console.error("Database connection failed", error);
  }
};
startServer();

app.get("/product", async (req, res) => {
    try {
        const query = `select pcnt.product_category_name_english product_category, oi.price, o.order_approved_at 
                          from products p 
                          join product_category_name_translation pcnt  
                          on p.product_category_name  = pcnt.product_category_name 
                          join order_items oi  
                          on p.product_id = oi.product_id 
                          join orders o
                          on oi.order_id  = o.order_id;`
        const result = await pool.query(query);
        res.json(result.rows);

    } catch(error) {
        res.status(500).json({error: error.message});
    }
})

app.get("/order-items", async (req, res) => {
    try{
        const query = `
            select o.order_approved_at, oi.price
            from orders o 
            left join order_items oi
            on o.order_id = oi.order_id;
            `;

        const result = await pool.query(query);
        res.json(result.rows);
    } catch(error){}

})

app.get("/shipments", async(req, res) => {
  try {
    const query = `
        SELECT g.geolocation_city, 
            (NULLIF(o.order_estimated_delivery_date, '')::date - 
            NULLIF(o.order_delivered_customer_date, '')::date) AS datediff,
            r.review_score,
            p.price
        FROM orders o
        join customers c 
        on o.customer_id = c.customer_id 
        join geolocation g 
        on c.customer_zip_code_prefix  = g.geolocation_zip_code_prefix 
        join reviews r 
        on o.order_id = r.order_id
        join (select o.order_id, sum(oi.price) as price
            from orders o
            join order_items oi
            on o.order_id = oi.order_id
            group by(o.order_id)) as p 
        on o.order_id = p.order_id;
      `
    const result = await pool.query(query);
    res.json(result.rows);
  } catch(error) {
    console.log(error);
  }
})