const DataStore = []
modules.exports = {
  createProducts,
  getProductsbyID,
  deleteArticleByID
}

function createProducts (products) {
  DataStore.push(products);
}

function getProductbyID (id) {
  // body...
}
