export function FiltredMovies(data, query) {
  const RegEx = /[!@#$%^&*()_\-,.:;/«»]/gi;

  if (query.isChecked) {
    return data
      .filter((item) => item.duration < 41)
      .filter((item) =>
        item.nameRU
          .toLowerCase()
          .trim()
          .replace(RegEx, "")
          .includes(query.string.toLowerCase().trim().replace(RegEx, ""))
      );
  } else {
    //console.log(query);
    return data.filter((item) =>
      item.nameRU
        .toLowerCase()
        .trim()
        .replace(RegEx, "")
        .includes(query.string.toLowerCase().trim().replace(RegEx, ""))
    );
  }
}
