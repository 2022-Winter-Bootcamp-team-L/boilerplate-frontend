function OddEvenResult(count) {
  const configure = count % 2 == 0 ? "짝수" : "홀수";
  return (
    <>
      <h4>{configure}</h4>
    </>
  );
}

export default OddEvenResult;
