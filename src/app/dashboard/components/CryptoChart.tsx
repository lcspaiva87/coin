import { CoinData } from "@/@types/typeCoins";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer } from 'recharts';



export default function CryptoChart({ coin }: { coin: CoinData }) {
  const totalSupplies = coin.map((item: CoinData) => item.total_supply);
  const data: Array<{ price: number }> = []
  console.log(data)



  coin?.forEach((item:any) => {
    data.push({
      price: item.total_supply,
    })
  })


  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <Area dataKey="price" stroke="#ffe1b5" fill="#fff6e8" />
        <CartesianGrid stroke="#e0deea" strokeDasharray="3 3" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
