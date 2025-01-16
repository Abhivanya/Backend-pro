const epxress = require("express");

const router = epxress.Router();

router.use("/add-product", (req, res, next) => {
  res.send(`
      <form action='/admin/product' method='POST'>
          <input type="text" name="name" /><br />
          <input type="number" name="size" /><br />
          <button>Add Product</button>
      </form>
      `);
});

router.post("/product", (req, res, next) => {
  const data = req.body;
  console.log(data);
  res.redirect("/");
});

module.exports = router;
