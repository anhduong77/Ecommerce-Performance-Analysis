# Ecommerce Performance Analysis

This project provides a comprehensive dashboard for analyzing ecommerce performance metrics, including product insights, logistics performance, and overall business KPIs. It features interactive visualizations built with D3.js, a Node.js backend with PostgreSQL database, and a Dockerized setup for easy deployment.

## Features

- **Performance Overview**: Visualize GMV (Gross Merchandise Value), AOV (Average Order Value), seasonality detection, and revenue trends.
- **Product Insights**: Analyze product categories by revenue, filter by year/month, and explore treemaps and line charts.
- **Logistics Performance**: Review shipment delays, city-based performance, and review score distributions.
- **Interactive Filters**: Dynamic filtering by year and month across dashboards.
- **Responsive Design**: Optimized for various screen sizes with iframe-based navigation.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript, D3.js for data visualizations.
- **Backend**: Node.js, Express.js, PostgreSQL with pg library.
- **Database**: PostgreSQL.
- **Containerization**: Docker and Docker Compose.
- **Environment**: Managed via .env files.

## Project Structure

```
.
├── .env                    # Environment variables (not committed)
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore rules
├── docker-compose.yml      # Docker Compose configuration
├── package.json            # Node.js dependencies and scripts
├── README.md               # Project documentation
├── .vscode/
│   └── settings.json       # VS Code settings
├── backend/
│   ├── Dockerfile          # Backend Docker configuration
│   └── src/
│       ├── app.js          # Express app setup
│       ├── index.js        # Server entry point
│       └── config/
│           └── database.js # Database connection pool
├── db/
│   └── init/
│       └── dump.sql        # Database schema and initial data
└── frontend/
    ├── Dockerfile          # Frontend Docker configuration
    ├── index.html          # Main dashboard hub with iframes
    ├── logistic_performance.html  # Logistics dashboard
    ├── performance_dashboard.html # Performance overview dashboard
    ├── product_performance.html   # Product insights dashboard
    └── scripts.js         # Utility scripts (if any)
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Ecommerce-Performance-Analysis
   ```

2. **Set up environment variables**:
   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Update the values in .env with your PostgreSQL credentials and settings.

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up the database**:
   - Collect database from: [data](https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce).
   - Ensure PostgreSQL is running.
   - Export database to db/init/dump.sql
   ```bash
   pg_dump --schema-only --no-owner --file=db/init/dump.sql <database_name>
   ```
   - Run the database initialization script from dump.sql.

5. **Run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```
   This will start the backend on port 4000 and frontend on port 8080.

## Usage

- Access the main dashboard at `http://localhost` (or the configured port).
- Navigate between dashboards using the top navigation.
- Use filters on the side panels to update visualizations dynamically.
- Backend API endpoints:
  - `GET /product`: Fetches product performance data.
  - `GET /order-items`: Retrieves order items for performance metrics.
  - `GET /shipments`: Provides shipment and logistics data.

## API Endpoints

- **/product**: Returns product category, price, and order approval date.
- **/order-items**: Supplies order approval date and price for KPIs.
- **/shipments**: Delivers geolocation city, shipment delay, review score, and price.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Commit changes and push.
4. Submit a pull request.

## UI
- Main page:
<img width="1150" height="598" alt="Screenshot from 2026-05-04 19-44-36" src="https://github.com/user-attachments/assets/a34239c8-c6be-4c77-996c-5418be3506d0" />
-Other dashboards:
<img width="1772" height="932" alt="Screenshot from 2026-05-04 19-49-35" src="https://github.com/user-attachments/assets/403b75dc-16a9-40fe-8094-c4889e609eba" />
<img width="1773" height="938" alt="Screenshot from 2026-05-04 19-50-01" src="https://github.com/user-attachments/assets/189d65de-3e94-4e37-aa6f-9218f368e7e3" />
- Features(Toggle):
<img width="1773" height="938" alt="Screenshot from 2026-05-04 19-51-08" src="https://github.com/user-attachments/assets/0f788077-d185-4f59-b321-6fed2e10f6ba" />
    + Filtered by product (health beauty).
<img width="1773" height="938" alt="Screenshot from 2026-05-04 19-52-00" src="https://github.com/user-attachments/assets/bfc3970d-663c-4366-88a9-4317b27819f8" />
    + Filtered by product and year(2017).
    + Selected the top revenue product.

## License

This project is licensed under the MIT License. See LICENSE file for details.
