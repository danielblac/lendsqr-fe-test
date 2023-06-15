import axios from "axios";

export async function loadPosts() {
  const data = import('/data/data.json')

  return data
}