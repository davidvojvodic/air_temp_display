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

storage = {
temperatureRecords: [
{
time: 1571176800000,
location: "Maribor",
temperature: 288 /* 288 K = 15°C */,
},
{ time: 1571263200000, location: "Maribor", temperature: 286.5 },
{ time: 1571349600000, location: "Maribor", temperature: 287.6 },
{ time: 1571436000000, location: "Maribor", temperature: 288.4 },
{ time: 1571522400000, location: "Maribor", temperature: 291 },
{ time: 1571608800000, location: "Maribor", temperature: 292.2 },
{ time: 1571695200000, location: "Maribor", temperature: 287.7 },
{ time: 1571781600000, location: "Maribor", temperature: 286.6 },
{ time: 1571868000000, location: "Maribor", temperature: 288.6 },
{ time: 1571954400000, location: "Maribor", temperature: 284.7 },
{ time: 1572040800000, location: "Maribor", temperature: 284.3 },
{ time: 1572127200000, location: "Maribor", temperature: 284.2 },
{ time: 1572217200000, location: "Maribor", temperature: 283.6 },
{ time: 1572303600000, location: "Maribor", temperature: 280.3 },
{ time: 1572390000000, location: "Maribor", temperature: 279.2 },
{ time: 1572476400000, location: "Maribor", temperature: 278.7 },
{ time: 1572562800000, location: "Maribor", temperature: 279 },
{ time: 1572649200000, location: "Maribor", temperature: 285.5 },
{ time: 1572735600000, location: "Maribor", temperature: 287.7 },
{ time: 1572822000000, location: "Maribor", temperature: 284.7 },
{ time: 1572908400000, location: "Maribor", temperature: 283.2 },
{ time: 1572994800000, location: "Maribor", temperature: 282.8 },
{ time: 1573081200000, location: "Maribor", temperature: 282.2 },
{ time: 1573167600000, location: "Maribor", temperature: 279.5 },
{ time: 1573254000000, location: "Maribor", temperature: 282 },
{ time: 1573340400000, location: "Maribor", temperature: 279 },
{ time: 1573426800000, location: "Maribor", temperature: 278.8 },
{ time: 1573513200000, location: "Maribor", temperature: 279.9 },
{ time: 1573599600000, location: "Maribor", temperature: 278.8 },
{ time: 1573686000000, location: "Maribor", temperature: 279 },
{ time: 1571176800000, location: "Portorož", temperature: 288.1 },
{ time: 1571263200000, location: "Portorož", temperature: 287.3 },
{ time: 1571349600000, location: "Portorož", temperature: 289.1 },
{ time: 1571436000000, location: "Portorož", temperature: 291 },
{ time: 1571522400000, location: "Portorož", temperature: 290.4 },
{ time: 1571608800000, location: "Portorož", temperature: 290.6 },
{ time: 1571695200000, location: "Portorož", temperature: 289.4 },
{ time: 1571781600000, location: "Portorož", temperature: 289.3 },
{ time: 1571868000000, location: "Portorož", temperature: 288.1 },
{ time: 1571954400000, location: "Portorož", temperature: 287.2 },
{ time: 1572040800000, location: "Portorož", temperature: 287.1 },
{ time: 1572127200000, location: "Portorož", temperature: 287.2 },
{ time: 1572217200000, location: "Portorož", temperature: 287.2 },
{ time: 1572303600000, location: "Portorož", temperature: 287.4 },
{ time: 1572390000000, location: "Portorož", temperature: 285.2 },
{ time: 1572476400000, location: "Portorož", temperature: 283.3 },
{ time: 1572562800000, location: "Portorož", temperature: 283.6 },
{ time: 1572649200000, location: "Portorož", temperature: 286.2 },
{ time: 1572735600000, location: "Portorož", temperature: 290.8 },
{ time: 1572822000000, location: "Portorož", temperature: 289.3 },
{ time: 1572908400000, location: "Portorož", temperature: 288.9 },
{ time: 1572994800000, location: "Portorož", temperature: 284.5 },
{ time: 1573081200000, location: "Portorož", temperature: 282.8 },
{ time: 1573167600000, location: "Portorož", temperature: 285 },
{ time: 1573254000000, location: "Portorož", temperature: 282.9 },
{ time: 1573340400000, location: "Portorož", temperature: 282.1 },
{ time: 1573426800000, location: "Portorož", temperature: 282.9 },
{ time: 1573513200000, location: "Portorož", temperature: 286.4 },
{ time: 1573599600000, location: "Portorož", temperature: 283.2 },
{ time: 1573686000000, location: "Portorož", temperature: 282.9 },
{ time: 1571176800000, location: "Ljubljana", temperature: 288.2 },
{ time: 1571263200000, location: "Ljubljana", temperature: 288.3 },
{ time: 1571349600000, location: "Ljubljana", temperature: 287.8 },
{ time: 1571436000000, location: "Ljubljana", temperature: 288.9 },
{ time: 1571522400000, location: "Ljubljana", temperature: 291 },
{ time: 1571608800000, location: "Ljubljana", temperature: 290.4 },
{ time: 1571695200000, location: "Ljubljana", temperature: 288.8 },
{ time: 1571781600000, location: "Ljubljana", temperature: 288.3 },
{ time: 1571868000000, location: "Ljubljana", temperature: 287.4 },
{ time: 1571954400000, location: "Ljubljana", temperature: 286.3 },
{ time: 1572040800000, location: "Ljubljana", temperature: 285.4 },
{ time: 1572127200000, location: "Ljubljana", temperature: 285.7 },
{ time: 1572217200000, location: "Ljubljana", temperature: 285.9 },
{ time: 1572303600000, location: "Ljubljana", temperature: 281.3 },
{ time: 1572390000000, location: "Ljubljana", temperature: 280.6 },
{ time: 1572476400000, location: "Ljubljana", temperature: 279.2 },
{ time: 1572562800000, location: "Ljubljana", temperature: 279.4 },
{ time: 1572649200000, location: "Ljubljana", temperature: 282.6 },
{ time: 1572735600000, location: "Ljubljana", temperature: 288 },
{ time: 1572822000000, location: "Ljubljana", temperature: 286 },
{ time: 1572908400000, location: "Ljubljana", temperature: 285.1 },
{ time: 1572994800000, location: "Ljubljana", temperature: 282.9 },
{ time: 1573081200000, location: "Ljubljana", temperature: 282 },
{ time: 1573167600000, location: "Ljubljana", temperature: 281.1 },
{ time: 1573254000000, location: "Ljubljana", temperature: 281 },
{ time: 1573340400000, location: "Ljubljana", temperature: 279.8 },
{ time: 1573426800000, location: "Ljubljana", temperature: 279.5 },
{ time: 1573513200000, location: "Ljubljana", temperature: 280.7 },
{ time: 1573599600000, location: "Ljubljana", temperature: 280 },
{ time: 1573686000000, location: "Ljubljana", temperature: 279.8 },
{ time: 1571176800000, location: "Novo mesto", temperature: 288.5 },
{ time: 1571263200000, location: "Novo mesto", temperature: 287.1 },
{ time: 1571349600000, location: "Novo mesto", temperature: 286.6 },
{ time: 1571436000000, location: "Novo mesto", temperature: 288 },
{ time: 1571522400000, location: "Novo mesto", temperature: 288.7 },
{ time: 1571608800000, location: "Novo mesto", temperature: 289.6 },
{ time: 1571695200000, location: "Novo mesto", temperature: 288.9 },
{ time: 1571781600000, location: "Novo mesto", temperature: 288.2 },
{ time: 1571868000000, location: "Novo mesto", temperature: 286.6 },
{ time: 1571954400000, location: "Novo mesto", temperature: 285 },
{ time: 1572040800000, location: "Novo mesto", temperature: 285.5 },
{ time: 1572127200000, location: "Novo mesto", temperature: 285.5 },
{ time: 1572217200000, location: "Novo mesto", temperature: 285.4 },
{ time: 1572303600000, location: "Novo mesto", temperature: 280.6 },
{ time: 1572390000000, location: "Novo mesto", temperature: 279.7 },
{ time: 1572476400000, location: "Novo mesto", temperature: 278.5 },
{ time: 1572562800000, location: "Novo mesto", temperature: 278.4 },
{ time: 1572649200000, location: "Novo mesto", temperature: 282.5 },
{ time: 1572735600000, location: "Novo mesto", temperature: 288.1 },
{ time: 1572822000000, location: "Novo mesto", temperature: 283.3 },
{ time: 1572908400000, location: "Novo mesto", temperature: 284.6 },
{ time: 1572994800000, location: "Novo mesto", temperature: 283.1 },
{ time: 1573081200000, location: "Novo mesto", temperature: 281.9 },
{ time: 1573167600000, location: "Novo mesto", temperature: 280.1 },
{ time: 1573254000000, location: "Novo mesto", temperature: 281.4 },
{ time: 1573340400000, location: "Novo mesto", temperature: 280.4 },
{ time: 1573426800000, location: "Novo mesto", temperature: 279.4 },
{ time: 1573513200000, location: "Novo mesto", temperature: 278.8 },
{ time: 1573599600000, location: "Novo mesto", temperature: 278.7 },
{ time: 1573686000000, location: "Novo mesto", temperature: 278.5 },
{ time: 1571176800000, location: "Murska Sobota", temperature: 284.3 },
{ time: 1571263200000, location: "Murska Sobota", temperature: 284.7 },
{ time: 1571349600000, location: "Murska Sobota", temperature: 287.6 },
{ time: 1571436000000, location: "Murska Sobota", temperature: 288.1 },
{ time: 1571522400000, location: "Murska Sobota", temperature: 292.3 },
{ time: 1571608800000, location: "Murska Sobota", temperature: 293.1 },
{ time: 1571695200000, location: "Murska Sobota", temperature: 286.1 },
{ time: 1571781600000, location: "Murska Sobota", temperature: 286.2 },
{ time: 1571868000000, location: "Murska Sobota", temperature: 287.1 },
{ time: 1571954400000, location: "Murska Sobota", temperature: 284.5 },
{ time: 1572040800000, location: "Murska Sobota", temperature: 284.2 },
{ time: 1572127200000, location: "Murska Sobota", temperature: 283.9 },
{ time: 1572217200000, location: "Murska Sobota", temperature: 282.8 },
{ time: 1572303600000, location: "Murska Sobota", temperature: 280.2 },
{ time: 1572390000000, location: "Murska Sobota", temperature: 279 },
{ time: 1572476400000, location: "Murska Sobota", temperature: 277.8 },
{ time: 1572562800000, location: "Murska Sobota", temperature: 278.8 },
{ time: 1572649200000, location: "Murska Sobota", temperature: 282.5 },
{ time: 1572735600000, location: "Murska Sobota", temperature: 288.6 },
{ time: 1572822000000, location: "Murska Sobota", temperature: 284.8 },
{ time: 1572908400000, location: "Murska Sobota", temperature: 283.8 },
{ time: 1572994800000, location: "Murska Sobota", temperature: 283.1 },
{ time: 1573081200000, location: "Murska Sobota", temperature: 282 },
{ time: 1573167600000, location: "Murska Sobota", temperature: 280 },
{ time: 1573254000000, location: "Murska Sobota", temperature: 282.4 },
{ time: 1573340400000, location: "Murska Sobota", temperature: 279.9 },
{ time: 1573426800000, location: "Murska Sobota", temperature: 279.3 },
{ time: 1573513200000, location: "Murska Sobota", temperature: 280.3 },
{ time: 1573599600000, location: "Murska Sobota", temperature: 278.9 },
{ time: 1573686000000, location: "Murska Sobota", temperature: 280.2 },
{ time: 1571176800000, location: "Celje", temperature: 288.7 },
{ time: 1571263200000, location: "Celje", temperature: 285.9 },
{ time: 1571349600000, location: "Celje", temperature: 287.9 },
{ time: 1571436000000, location: "Celje", temperature: 287.8 },
{ time: 1571522400000, location: "Celje", temperature: 292 },
{ time: 1571608800000, location: "Celje", temperature: 289.8 },
{ time: 1571695200000, location: "Celje", temperature: 287.7 },
{ time: 1571781600000, location: "Celje", temperature: 286.3 },
{ time: 1571868000000, location: "Celje", temperature: 285.2 },
{ time: 1571954400000, location: "Celje", temperature: 283.5 },
{ time: 1572040800000, location: "Celje", temperature: 283.3 },
{ time: 1572127200000, location: "Celje", temperature: 284.1 },
{ time: 1572217200000, location: "Celje", temperature: 283.6 },
{ time: 1572303600000, location: "Celje", temperature: 280 },
{ time: 1572390000000, location: "Celje", temperature: 279.7 },
{ time: 1572476400000, location: "Celje", temperature: 278.5 },
{ time: 1572562800000, location: "Celje", temperature: 279.3 },
{ time: 1572649200000, location: "Celje", temperature: 284.6 },
{ time: 1572735600000, location: "Celje", temperature: 288.1 },
{ time: 1572822000000, location: "Celje", temperature: 284.3 },
{ time: 1572908400000, location: "Celje", temperature: 284.4 },
{ time: 1572994800000, location: "Celje", temperature: 282.4 },
{ time: 1573081200000, location: "Celje", temperature: 280.8 },
{ time: 1573167600000, location: "Celje", temperature: 280.7 },
{ time: 1573254000000, location: "Celje", temperature: 280.9 },
{ time: 1573340400000, location: "Celje", temperature: 278.7 },
{ time: 1573426800000, location: "Celje", temperature: 279.2 },
{ time: 1573513200000, location: "Celje", temperature: 280.3 },
{ time: 1573599600000, location: "Celje", temperature: 279.1 },
{ time: 1573686000000, location: "Celje", temperature: 278.9 },
],
};
