import RobotList from "./components/RobotList";
import RobotForm from "./components/robotForm";

function App() {
  return (
    <main className="bg-zinc-900 h-full">
      <div className="container mx-auto p-10">
        <RobotForm />
        <RobotList />
      </div>
    </main>
  );
}

export default App;
