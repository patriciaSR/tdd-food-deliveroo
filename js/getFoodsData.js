
async function getFoodsData(ENDPOINT) {
  try {
    const res = await fetch(ENDPOINT);
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export { getFoodsData };
