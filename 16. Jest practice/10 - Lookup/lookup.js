// Data
const users = [
  {
    login: "knuth",
    firstName: "Donald",
    lastName: "Knuth",
    likes: ["C", "Unix"],
  },
  {
    login: "norvig",
    firstName: "Peter",
    lastName: "Norvig",
    likes: ["AI", "Search", "NASA", "Mars"],
  },
  {
    login: "mfowler",
    firstName: "Martin",
    lastName: "Fowler",
    likes: ["Design Patterns", "Refactoring"],
  },
  {
    login: "kent",
    firstName: "Kent",
    lastName: "Beck",
    likes: ["TDD", "wikis", "Design Patterns"],
  },
];

// lookup()
const lookup = (login, property) => {
  const person = users.find((el) => el.login === login);
  if (!person) throw new Error("Could not find user");
  if (!person[property]) throw new Error("Could not find property");
  return person[property];
};

module.exports = lookup;
