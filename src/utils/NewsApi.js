//NEWS_API replaced with PROXY_API for live server access from newsarawsmn.students.nomoredomainssbs.ru:
import { API_KEY, PROXY_API } from "./constants";
async function getNewsApi(keyword) {
  let date = new Date();
  const [year, month, day] = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
  ];

  // 7 days prior to the current date
  const res = await fetch(
    `${PROXY_API}?q=${keyword}&from=${year}-${month + 1}-${day}&to=${year}-${
      month + 1
    }-${day - 7}&pageSize=100&language=en&apiKey=${API_KEY}`
  );
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`NewsAPI Error: 
    ${res.status} ${res.statusText}`);
  }
}

export { getNewsApi };
