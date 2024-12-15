"use client";
import Counter from "@/components/Counter";
import Stats from "@/components/Stats";
import { decrement, increment } from "@/redux/slices/counters/countersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ReduxStateManagement() {
  const counters = useSelector((state: { counters: { id: number; count: number; }[] }) => state.counters);
  const dispatch = useDispatch();
  
  const totalcount = counters.reduce((sum, current) => sum + current.count, 0);
  const handleIncrement = (counterId: number)=>{
    dispatch(increment(counterId));
  }
  const handleDecrement = (counterId: number)=>{
    dispatch(decrement(counterId));
  }
  return (
    <main className="min-h-screen bg-gray-100 p-24">
      <h1 className="text-center w-2/5 mx-auto text-3xl font-bold border-2 px-4 py-3 border-black bg-yellow-100">Redux State Management</h1>
      
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
