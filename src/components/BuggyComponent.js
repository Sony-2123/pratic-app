import React from "react";

function BuggyComponent() {
  // Simulate a runtime error
  throw new Error("This is a simulated error.");
  // return <div>This won't render</div>; // unreachable
}

export default BuggyComponent;
