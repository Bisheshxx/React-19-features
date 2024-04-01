import { Suspense } from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";
import Todo from "./Feature/Todo";

function App() {
  return (
    <ErrorBoundary fallback={<div className="text-white">Error</div>}>
      <Suspense fallback={<>Loading...</>}>
        <Todo />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
