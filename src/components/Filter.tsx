function Filter() {
  const sourceList: string[] = ["Source 1", "Source 2", "Source 3", "Source 4"];

  return (
    <>
      <p>News Sources</p>
      {sourceList?.map((source, index) => <button key={index}>{source}</button>)}
    </>
  )
}

export default Filter
