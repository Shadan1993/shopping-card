const ProdactList = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    image: "/images/prodact.jpg",
  },
  {
    id: 1,
    title: "Product 1",
    price: 100,
    image: "/images/prodact.jpg",
  },
  {
    id: 3,
    title: "Product 1",
    price: 100,
    image: "/images/prodact.jpg",
  },
  {
    id: 4,
    title: "Product 1",
    price: 100,
    image: "/images/prodact.jpg",
  },
];

function getProdactId(id: number) {
  let prodactData = ProdactList.find((item) => item.id === id);
  return prodactData;
}

export { getProdactId, ProdactList };
