"use client";
import Counter from "@/components/Counter";
import Stats from "@/components/Stats";
import { useState } from "react";
const initialCounters = [
  {
    id: 1,
    count: 0
  },
  {
    id: 2,
    count: 0
  }
]
export default function Home() {
  const [counters, setCounters] = useState(initialCounters);

  const totalcount = counters.reduce((sum, current) => sum + current.count, 0);
  const handleIncrement = (counterId: number)=>{
    const newCounters =  counters.map((counter)=>{
          if(counter.id === counterId){
              counter.count += 1;
          }
          return counter;
      })
      setCounters(newCounters);
  }
  const handleDecrement = (counterId: number)=>{
     const newCounters = counters.map((counter)=>{
          if(counter.id === counterId){
              counter.count -= 1;
          }
          return counter;
      })
      setCounters(newCounters);
  }
  return (
    <main className="min-h-screen bg-gray-100 p-24">
      <h1 className="text-center text-3xl font-bold border-2 px-4 py-3 border-black bg-yellow-100">Introducing Redux</h1>
      
      <div className="max-w-md mx-auto mt-8 flex flex-col gap-4">
        {counters.map((counter) => (
          <Counter key={counter.id} count={counter.count} 
          onIncrement={() => handleIncrement(counter.id)} 
          onDecrement={() => handleDecrement(counter.id)} />
        ))}
        <Stats totalcount={totalcount}/>
      </div>
    </main>
  );
}
