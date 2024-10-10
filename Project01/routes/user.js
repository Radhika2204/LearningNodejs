const express = require("express");
const router = express.Router();
const {handlerequest, getuserbyid, handlepatch,handledeleteidasync,handlepostbyid} = require("../controllers/user")
//router.use(express.urlencoded({extended : false}))

router.post("/",handlepostbyid )

router.get("/", handlerequest)
router.get("/:id",getuserbyid)
router.patch("/:id", handlepatch)
router.delete("/:id",handledeleteidasync)


module.exports = router;