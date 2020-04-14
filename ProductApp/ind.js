const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
var cors = require('cors')
const app = express();
const MongoClient = require('mongodb');
const url = 'mongodb://localhost:27017';
const saltRounds = 10;
const jwt = require('jsonwebtoken')

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

function authenticate(req, res, next) {
    var token = req.header('Authorization');
    console.log(token)
    if (token == undefined) {
        res.status('401').json({
            message: "unauthorized"
        });
    } else {
		let decode=jwt.verify(token,'sadfghsadfg');
		if(decode!== undefined){
			next();
		}
        /*jwt.verify(token, 'dfadgadfweegaerw', function (err, decode) {
            if (decode !== undefined) {
                req.userId = decode.id
                next();*/
            
            else {
                res.status('401').json({
                    message: "Unauthorized"
                });
            }
        

        next();

    }
}


app.post('/register', function (req, res) {
    console.log(req.body);

    MongoClient.connect(url,
{ useNewUrlParser: true, useUnifiedTopology: true },
	 (err, client) => {
        if (err) throw err;
        var db = client.db("ProdDB");
		/*var newData = {
			name: req.body.name, 
			email: req.body.email, 
			contact:req.body.contact,
			address:req.body.address
			
		}*/

        bcrypt.genSalt(saltRounds, (err, salt) => {
              if (err) throw err;
			console.log(salt);

            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) throw err;
				console.log(hash);
				//newData.password= hash;

                db.collection('user').insertOne({
			name: req.body.name, 
			email: req.body.email,
			password: hash,
			contact:req.body.contact,
			address:req.body.address
			
		} , (err, result) => {
                    if (err) throw err;
                    client.close();

                    res.json({
                        message: "user Created Successfully"
                    })
                })
            })
        })

    })

})
app.post('/login', function (req, res) {

    MongoClient.connect(url, 
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
        if (err) throw err;
        var db = client.db("ProdDB");
        db.collection('user').findOne({ email: req.body.email }, (err, user) => {
            if (err) throw err;
            //console.log(user)
            if (!user) {
                res.json({
                    message:"Invalid User"
                })
              }
              
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) throw err;
                
                if (result) {
                    var jwtToken = jwt.sign({ id: user._id }, 'sadfghsadfg',{expiresIn:'1d'}); 
                    //console.log(jwtToken)
                    res.json({
                        message: "success",
                        token: jwtToken
                    })
                }
                else {
                    res.json({
                        message:"Incorrect password"
                    })
                }
            })
        })
    })
});

app.get('/dashboard', authenticate, function (req, res) {
    var user = req.userId;
    res.json({
        message: "Protected",
        id: user
    })

});

app.post('/dashboard', function (req, res) {
    console.log(req.body);

    MongoClient.connect(url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
        if (err) return console.log(err);

        var db = client.db("ProdDB");
        db.collection('products').insertOne({user_id:req.body.user_id,item:req.body.item,qty:req.body.qty},{ useUnifiedTopology: true }, (err, result) => {
            if (err) throw err;
            client.close();
            res.json({
                message:"success"
            })
        })

    })

})
app.get('/view', function (req, res) {
   //res.json(myData)
   MongoClient.connect(url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
   (err, client) => {
    if (err) return console.log(err);
    var db = client.db("ProdDB");
    var usersData = db.collection('products').find().toArray();
    usersData.then(function (data) {
            client.close();
            res.json(data);
        })
        .catch(function (err) {
            client.close();
            res.status(500).json({
                message: "error"
            })
        })

})

})
app.put("/update", function (req, res) {
    console.log(req.body);
    mongoClient.connect(url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	function (err, client) {
        if (err) throw err;
        var db = client.db("loginDB");
        db.collection("products").findOneAndUpdate(
            { item: req.body.item },
            { $set: { item: req.body.item } }, function (err, result) {
                if (err) throw err;
                client.close();
                res.json({
                    message: "updated"
                })
            });

    });
});

app.delete('/products', function (req, res) {
    MongoClient.connect(url,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err, client) => {
        if (err) throw err;
        var db = client.db("loginDB");
        db.collection('products').findOneAndDelete({ item: req.body.item }, (err, result) => {
            if (err) throw err;
            client.close();
            res.json({
                message:"deleted successfully"
            })
        })
    })
})




app.listen(3000, function () {
    console.log("port is running in 3000")
});