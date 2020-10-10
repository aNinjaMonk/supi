const express = require('express');
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req,res)=>{
	res.send('hello');
});

app.get('/balance', (req,res)=>{
	var balance = {balance: 0};
	res.send(balance);
});


app.get('/status', (req,res)=>{
	var status = {status: 0};
	res.send(status);
});

app.get('/account_providers', (req,res)=>{
	var providers = [{'bank1':'neft'},{'bank2':'neft'}];
	res.send(providers);
});

app.post('/pay', (req,res)=>{
	const query = req.query;
	console.log(req.query.name + " " + req.query.phone + " " + req.query.secret_key);
	res.send({status: 0});
});

app.listen(PORT, ()=>{
	console.log(`Server running at http://localhost:${PORT}`);
});
