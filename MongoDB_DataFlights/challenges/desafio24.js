db.voos.find({
  $and: [
    {
      $nor: [
        { "empresa.nome": "GOL" },
        { "empresa.nome": "AZUL" },
      ],
    },
    { litrosCombustivel: { $lte: 600 } },
    { litrosCombustivel: { $exists: true } },
  ],
}, { _id: 0, vooId: 1, litrosCombustivel: 1, "empresa.nome": 1 }).limit(1);
