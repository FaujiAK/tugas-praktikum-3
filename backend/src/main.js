import express from "express";
const app = express();
app.use(express.json());
const port = 7000;

app.get("/", (req, res) => {
  res.send({
    nama: "Fauji Ahmad K",
  });
});
app.get("/makanan", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Soto",
      rasa: "Ayam",
    },
    {
      id: 2,
      nama: "Nasi",
      rasa: "Uduk",
    },
    {
      id: 3,
      nama: "Mie",
      rasa: "Ayam",
    },
    {
      id: 4,
      nama: "Baso",
      rasa: "Cingcang",
    },
  ]);
});
app.get("/minuman", (req, res) => {
  res.send([
    {
      id: 1,
      nama: "Es",
      rasa: "Jeruk",
    },
    {
      id: 2,
      nama: "Teh",
      rasa: "Sosro",
    },
    {
      id: 3,
      nama: "Soju",
      rasa: "Leci",
    },
    {
      id: 4,
      nama: "Jus",
      rasa: "Kelapa",
    },
  ]);
});
app.post("/create", (req, res) => {
  res.send({
    nama: req.body,
  });
});

app.listen(port, () => {
  console.log(`Aplikasi Berjalan di port ${port}`);
});
