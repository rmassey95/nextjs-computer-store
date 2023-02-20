const inventory = [
  { name: "fake item 1", desc: "htejkahj" },
  { name: "fake item 2", desc: "thenalkfa" },
];

export default function handler(_req, res) {
  res.status(200).json(inventory);
}
