export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '1a247e3d96msh45586f3b3fc9634p14a66cjsndc923dad6e4e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
