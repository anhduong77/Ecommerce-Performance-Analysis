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

.
├── .env # Environment variables (not committed)
├── .env.example # Example environment variables
├── .gitignore # Git ignore rules
├── docker-compose.yml # Docker Compose configuration
├── package.json # Node.js dependencies and scripts
├── README.md # Project documentation
├── .vscode/
│ └── settings.json # VS Code settings
├── backend/
│ ├── Dockerfile # Backend Docker configuration
│ └── src/
│ ├── app.js # Express app setup
│ ├── index.js # Server entry point
│ └── config/
│ └── database.js # Database connection pool
├── db/
│ └── init/
│ └── dump.sql # Database schema and initial data
└── frontend/
├── Dockerfile # Frontend Docker configuration
├── index.html # Main dashboard hub with iframes
├── logistic_performance.html # Logistics dashboard
├── performance_dashboard.html # Performance overview dashboard
├── product_performance.html # Product insights dashboard
└── scripts.js # Utility scripts (if any)

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd DSDV_prj

2. **Set up environment variables**:
- Copy .env.example to .env:
    cp .env.example .env