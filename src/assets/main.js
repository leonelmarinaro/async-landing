const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC8LeXCWOalN8SxlrPcG-PaQ&part=snippet%2Cid&order=date&maxResults=5";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1877404507msh7617bcccc6c94ebp1e7291jsna83b1d65036a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

// fetch(API, options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

async function fetchData(urlApi) {
  const response = await fetch(urlAPI, options);
  const data = await response.json();
  return data;
}

