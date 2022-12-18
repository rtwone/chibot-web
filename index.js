const express = require ("express")
const app = express()


 app.get("/jasa-coding", (req, res) => {
res.redirect("https://wa.me/19292929999")

})

app.listen(3000, () => {
console.log("run at port 3000")
})
