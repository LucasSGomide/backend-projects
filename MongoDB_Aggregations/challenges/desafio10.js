db.trips.aggregate([
  {
    $group: {
      _id: "$usertype",
      duracaoMedia: {
        $avg: {
          $divide: [{
            $subtract: ["$stopTime", "$startTime"],
          }, 3600000],
        },
      },
    },
  },
  {
    $sort: { duracaoMedia: 1 },
  },
  {
    $project: {
      _id: false,
      tipo: "$_id",
      duracaoMedia: { $round: ["$duracaoMedia", 2] },
    },
  },
]);
