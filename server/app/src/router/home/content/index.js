
const initiateDB = function (req, res, next) {
	let pageMesage = "asdasdasdasd!!";
	console.log("\n" + pageMesage + "\n");
	res.send({ pageMesage: pageMesage });
}
module.exports = initiateDB;



