const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export async function fetchData(request: string){
  if (!apiKey) {
    throw new Error("API key is missing!");
  };

  const response = await fetch(`https://newsapi.org/v2/${request}&apiKey=${apiKey}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  };

  return response.json();
}