This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features

A simple web application for recording and analyzing temperature data.

1. Record temperature data for various locations.
2. View latest temperature records.
3. Filter temperature records by date range.
4. View statistics based on recorded data, including: Average temperature, number of cold days, number of hot days, number of days above average temperature and mode temperature.
5. Added throttling to date filter request.
6. Theme switcher.
7. Animations.
8. Website is responsive.
9. Written some basic tests, but could have done better.

## Recording Temperature Data

1. Enter the location, date, and temperature in the input fields.
2. Click the "Submit" button to save the temperature record.
3. The latest temperature records will be displayed below the input form.
4. Stats update on submit.

## Filtering Temperature Records

1. Click the "Filter by Date Range" button.
2. Select the start and end dates for the range.
3. The temperature records within the selected range will be displayed.

## Data

The data is stored in folder data/mockApi.ts
