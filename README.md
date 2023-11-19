# Coinsynch - Crypto Currency Wallet for Easy Transactions

Coinsynch is a fictional project developed as a technical challenge for a frontend programmer vacancy. It consists of a landing page that provides information about cryptocurrencies and a dashboard that allows users to manage their crypto wallet and transactions.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Contact](#contact)
## Demo

You can find a live demo of the Coinsynch project at [coinsynch-delta.vercel.app](https://coin-rosy-three.vercel.app/).

## Features

- **Cryptocurrency Landing Page**: Provides essential information about cryptocurrencies and.
- **Dashboard**: Users can create an account, manage their crypto wallets and initiate new transactions.
- **Real-Time Data**: Live updates on cryptocurrency prices.
- **Responsive Design**: Fully responsive layout that works on all devices.

## Getting Started

- Node.js (v14 or higher)
- npm or Yarn (latest stable version)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lcspaiva87/coin
   cd coinsynch
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

1. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
2. Run the json-server (this step is optional, as the application is programmed to use fake data when either the coin api or json-server are unavailable):
   ```bash
   npm run server
   # or
   yarn server
   ```
3. Open your browser and navigate to `http://localhost:3000` to access the Coinsynch landing page.

4. For the dashboard, you need to log in.

## Technologies


- [ReactJS](https://reactjs.org)
- [Axios](https://github.com/axios/axios)
- [tailwindcss](https://tailwindcss.com/)
- [NextJs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React-query](https://tanstack.com/query/v3/)
- [yup](https://github.com/jquense/yup)
- [Zustand](https://github.com/pmndrs/zustand)
