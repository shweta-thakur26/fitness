export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f21fbf6241msh0a72a6905054490p117f0cjsn34adae2ec2ac',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f21fbf6241msh0a72a6905054490p117f0cjsn34adae2ec2ac',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
