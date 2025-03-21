import GradientDoughnutChart from "./components/GradientDoghnutChart";



export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
        <GradientDoughnutChart />
      </div>
      </main>
  );
}
