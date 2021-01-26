function App() {
  return (
    <>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("i am cheked")}} />
    </>
  );
}

export default App;
