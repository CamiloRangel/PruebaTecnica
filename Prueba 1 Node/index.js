const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/'));

const db_name = path.join(__dirname, "db", "board.db");
const db = new sqlite3.Database(db_name, err=>{
    if(err){
        return console.log(err.message);
    }else{
        return console.log("Conexion exitosa")
    }
});

const sql_create = "CREATE TABLE IF NOT EXISTS tasks(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, stage INTEGER, title VARCHAR(250) UNIQUE)"

db.run(sql_create, err =>{
    if(err){
        return console.log(err.message);
    }else{
        return console.log("Tabla creada exitosamente")
    }
});




//Get all tasks
app.get('/boards', (req, res) =>{
    const sql = "SELECT * FROM tasks"
    db.all(sql, [], (err, rows)=>{
        if(err){
            return console.log(err.message);
        }else{
            res.status(200).send(rows);
        }
    })
    
});

//Add task
app.post('/boards', (req, res) => {
    const sql = "INSERT INTO tasks(stage, title) VALUES(?,?)"
    const sql2 = "SELECT * FROM tasks WHERE title = '"+req.body.title+"'";
    var task = [1];
    task.push(req.body.title);

    db.all(sql2, [], (err, rows)=>{
        if(err){
            console.log(err.message);
        }else{
            if(rows.length === 0){
                db.run(sql, task, err =>{
                    if(err){
                        console.log(err.message);
                    }else{
                        db.all(sql2, [], (err, rows)=>{
                            if(err){
                                return console.log(err.message);
                            }else{
                                res.status(201).send(rows);
                            }
                        });
                    }
                })
            }else{
                res.status(201).send(rows);
            }
        }
    });


});


//Edit task
app.put('/boards/:id', (req, res) =>{
    const id = req.params.id
    const sql = "UPDATE tasks SET stage = ? WHERE id="+id
    const sql2 = "SELECT * FROM tasks WHERE id="+id
    console.log(sql);
    if(req.body.stage > 0 && req.body.stage <=3){
        db.run(sql, req.body.stage, err =>{
            if(err){
                return console.log(err.message);
            }else{
                db.all(sql2, [], (err, rows)=>{
                    if(err){
                        return console.log(err.message);
                    }else{
                        res.status(200).send(rows);
                    }
                })
            }
        })
        
    }else{
        res.status(400).send({'Error':'stage > 3 o stage < 1'});
    }
    
});


const port = process.env.port || 3000;

app.listen(port, () => console.log(`escuchando en el puerto ${port}...`))



