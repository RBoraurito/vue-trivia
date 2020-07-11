const BASE_URL = "https://opentdb.com/api.php?";

function setAmount({ cant }) {
  return `amount=${cant}`;
}
function setCategory({ category }) {
  return `category=${category}`;
}
function setDifficulty({ difficulty }) {
  return `difficulty=${difficulty.toLowerCase()}`;
}
function setType({ type }) {
  if (type === "Multiple Choise") {
    return "type=multiple";
  }
  return "type=boolean";
}

function getParams(options) {
  if (options.category === 0) {
    delete options.category;
  }
  if (options.type === "Any Type") {
    delete options.type;
  }
  if (options.difficulty === "Any Difficulty") {
    delete options.difficulty;
  }
  let params = [];
  params.push(setAmount(options));
  if (options.category) {
    params.push(setCategory(options));
  }
  if (options.difficulty) {
    params.push(setDifficulty(options));
  }
  if (options.type) {
    params.push(setType(options));
  }
  return params;
}
function getData(options) {
  let query = "";
  getParams(options).forEach((Element) => {
    query = query + Element + "&";
  });
  const URL = BASE_URL + query;
  console.log(URL);
  return fetch(URL)
    .then((res) => res.json())
    .then((res) => res.results);
}

export default getData;
