const getFirstElementByName = (name) => {
  const elements = document.getElementsByName(name);
  return elements && elements.length ? elements[0] : null;
}



