import { fetchData } from "./fetchData";

export function getNews(){
  return fetchData("everything?q=news");
};

export function getTopNews(){
  return fetchData("top-headlines?q=news");
};

export function getSources(){
  return fetchData("top-headlines/sources?");
};