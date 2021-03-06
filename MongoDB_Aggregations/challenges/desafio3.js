db.movies.aggregate([
  {
    $match: {
      "imdb.rating": { $gte: 7 },
      genres: { $nin: ["Crime", "Horror"] },
      $and: [
        {
          $or: [
            { rated: "PG" },
            { rated: "G" },
          ],
        },
        {
          languages: { $all: ["English", "Spanish"] },
        },
      ],
    },
  },
  {
    $project: {
      _id: false,
      titulo: "$title",
      avaliado: "$rated",
      notaIMDB: "$imdb.rating",
      votosIMDB: "$imdb.votes",
      ano: "$year",
    },
  },
  {
    $sort: { ano: -1, notaIMDB: -1, titulo: 1 },
  },
]);
