export async function fetchData(request: string){
  const response = await fetch("https://newsapi.org/v2/" + request + "&apiKey=7b16cb0de16c40398a85506bd18a6150", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    };

  return response.json();
}