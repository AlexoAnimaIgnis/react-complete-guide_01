
// Add the following line in order to use the custom component like a regular component
import ExpenseItem from "./components/ExpsenseItem"; // lowercase elements are considered built-in HTML elements. use uppercase

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem />
    </div>
  );
}

export default App;