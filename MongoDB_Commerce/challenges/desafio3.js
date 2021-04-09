db.produtos.updateMany({}, {
  $mul: { avaliacao: NumberInt("0") },
});

db.produtos.updateMany({
  tags: { $all: ["bovino"] },
}, {
  $inc: { avaliacao: NumberInt("5") },
});

db.produtos.updateMany({
  tags: { $all: ["ave"] },
}, {
  $inc: { avaliacao: NumberInt("3") },
});

db.produtos.find({}, {
  _id: false, nome: true, avaliacao: true,
});
