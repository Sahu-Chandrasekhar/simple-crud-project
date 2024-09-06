const con = require("./mysqlConfig")
const app = require("./expressConfig")

// --------------------------------------
app.get("/get/role", (req, res) => {
    con.query("select * from role", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})
app.get("/get/category", (req, res) => {
    con.query("select * from category", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})
// ---------------------------------------

// ---------------user api start-------------
app.get("/get/users", (req, res) => {
    con.query("select u.userid, u.isdcode, u.email, u.mobile, r.name as rname from users u inner join role r on u.roleid = r.roleid;", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

app.get("/get/usersbyid/:userid", (req, res) => {
    const userid = req.params.userid;
    con.query('select * from users WHERE userid = ?', [userid], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

// --------------------------
app.get("/get/duplicateusername/:name", (req, res) => {
    const name = req.params.name;
    con.query('select * from users WHERE name = ?', [name], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

app.get("/get/duplicatemobile/:useremail", (req, res) => {
    const usermobile = req.params.mobile;
    con.query('select * from users WHERE mobile = ?', [usermobile], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result.length);
        }
    })
})
// ------------------------

app.post("/add/users", (req, res) => {
    let data = req.body
            // res.send(result)
            con.query('insert INTO users SET ?', data, (error, result, fields) => {
                if (error) throw error;
                res.send(result)
            })
})

app.delete("/delete/users/:id", (req, res) => {
    console.log(req.params.id)
    con.query("DELETE FROM users WHERE userid = ?", req.params.id, (error, result) => {
        if (error) throw error;
        res.send(result)
    })
})
app.put("/put/users/:id", (req, res) => {
    console.log(req.params.name)
    const data = [req.body.name, req.body.mobile, req.body.email, req.body.roleid, req.params.id];
    con.query("UPDATE users SET name = ? , mobile=? , email=? ,roleid=? where userid = ?", data, (err, result, fields) => {
        if (err) throw err
        res.send(result);
    })
})

// ---------------user api end-------------


// --------------segment api start-----------
app.post("/add/segment", (req, res) => {
    let data = req.body
    con.query('INsert INTO segment SET ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result)
    })
})

app.get("/get/segmentbyid/:segmentid", (req, res) => {
    const segmentid = req.params.segmentid;
    con.query('select * from segment WHERE segmentid = ?', [segmentid], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

app.get("/get/segmentbycategoryid/:categoryid", (req, res) => {
    const categoryid = req.params.categoryid;
    con.query('select * from segment WHERE categoryid = ?', [categoryid], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})

app.get("/get/segment", (req, res) => {
    con.query("SELECT * FROM category", (err, categoryResult) => {
        if (err) {
            res.send(err);
        } else {
            const categoryMap = {};
            categoryResult.forEach((category) => {
                categoryMap[category.categoryid] = category.name;
            });

            con.query("SELECT * FROM segment", (err, segmentResult) => {
                if (err) {
                    res.send(err);
                } else {
                    const results = segmentResult.map((segment) => ({
                        segmentid: segment.segmentid,
                        name: segment.name,
                        categoryid: segment.categoryid,
                        categoryname: categoryMap[segment.categoryid],
                    }));
                    res.send({ results });
                }
            });
        }
    });
});

app.put("/put/segment/:id", (req, res) => {
    console.log(req.params.name)
    const data = [req.body.name, req.body.categoryid, req.params.id];
    con.query("UPDATE segment SET name = ? , categoryid=? where segmentid = ?", data, (err, result, fields) => {
        if (err) throw err
        res.send(result);
    })
})
app.delete("/delete/segment/:id", (req, res) => {
    console.log(req.params.id)
    con.query("DELETE FROM segment WHERE segmentid = ?", req.params.id, (error, result) => {
        if (error) throw error;
        res.send(result)
    })
})

// --------------segment api end-----------

// -----------subject api start-------------
app.post("/add/subject", (req, res) => {
    let data = req.body
    con.query('INsert INTO subject SET ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result)

    })
})

app.get("/get/subjectbyid/:subjectid", (req, res) => {
    const subjectid = req.params.subjectid;
    con.query('select * from subject WHERE subjectid = ?', [subjectid], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})
app.get("/get/subjectbysegmentid/:segmentid", (req, res) => {
    const segmentid = req.params.segmentid;
    con.query('select * from subject WHERE segmentid = ?', [segmentid], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})
app.get("/get/subject", (req, res) => {
    con.query("select * from segment", (err, segmentResult) => {
        if (err) {
            res.send(err);
        } else {
            const subjectMap = {};
            segmentResult.forEach((data) => {
                subjectMap[data.segmentid] = data.name;
            });

            con.query("SELECT * FROM subject", (err, subjectResult) => {
                if (err) {
                    res.send(err);
                } else {
                    const results = subjectResult.map((data) => ({
                        subjectid: data.subjectid,
                        name: data.name,
                        segmentid: data.segmentid,
                        segmentname: subjectMap[data.segmentid],
                    }));
                    res.send({ results });
                }
            });
        }
    })
})
app.put("/put/subject/:id", (req, res) => {
    console.log(req.params.name)
    const data = [req.body.name, req.body.segmentid, req.params.id];
    con.query("UPDATE subject SET name = ? , segmentid=? where subjectid = ?", data, (err, result, fields) => {
        if (err) throw err
        res.send(result);
    })
})
app.delete("/delete/subject/:id", (req, res) => {
    console.log(req.params.id)
    con.query("DELETE FROM subject WHERE subjectid = ?", req.params.id, (error, result) => {
        if (error) throw error;
        res.send(result)
    })
})
// list crud
app.post("/add/systemList", (req, res) => {
    let data = req.body
    con.query('INsert INTO systemlist SET ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result)
    })
})
app.get("/get/systemList", (req, res) => {
    con.query("select * from systemlist", (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})
app.put("/put/systemList/:id", (req, res) => {
    const data = [req.body.listName, req.params.id];
    con.query("UPDATE systemlist SET listName = ?  where listId = ?", data, (err, result, fields) => {
        if (err) throw err
        res.send(result);
    })
})
app.delete("/delete/systemList/:id", (req, res) => {
    con.query("DELETE FROM systemlist WHERE listId = ?", req.params.id, (error, result) => {
        if (error) throw error;
        res.send(result)
    })
})

// listItem crud
app.post("/add/systemListItem/:listid", (req, res) => {
    const listid = req.params.listid;
    let newItem = req.body
    newItem.listid = listid;
    con.query('INsert INTO systemlistitem SET ?', newItem, (error, result, fields) => {
        if (error) throw error;
        res.send(result)
    })
})

app.get("/get/systemListItem/:listid", (req, res) => {
    const listid = req.params.listid;
    con.query('SELECT * FROM systemlistitem WHERE listid = ?', [listid], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})
// app.get("/get/systemListItemboard", (req, res) => {
//     const listid = 1;
//     con.query('SELECT * FROM systemlistitem WHERE listid = ?', [listid], (err, result) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     })
// })
// app.get("/get/systemListItemtrainerlocation", (req, res) => {
//     const listid = 58;
//     con.query('SELECT * FROM systemlistitem WHERE listid = ?', [listid], (err, result) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(result);
//         }
//     })
// })
app.put("/put/systemListItem/:id", (req, res) => {
    const data = [req.body.listItemName, req.params.id];
    con.query("UPDATE systemlistitem SET listItemName = ?  where listItemId = ?", data, (err, result, fields) => {
        if (err) throw err
        res.send(result);
    })
})
app.delete("/delete/systemListItem/:id", (req, res) => {
    con.query("DELETE FROM systemlistitem WHERE listItemId = ?", req.params.id, (error, result) => {
        if (error) throw error;
        res.send(result)
    })
})

// profile api start-------------------
// post api
app.post("/add/generalinfo", (req, res) => {
    let data = req.body
    con.query('INsert INTO profile SET ?', data, (error, result, fields) => {
        if (error) throw error;
        res.send(result)

    })
})
// get
app.get("/get/generalinfo/:userid", (req, res) => {
    const userid = req.params.userid;
    con.query('select * from profile WHERE userid = ?', [userid], (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    })
})
// put email
app.put("/put/verifyemail/:id", (req, res) => {
    console.log(req.params.name)
    const data = [req.body.name, req.body.mobile, req.body.email, req.body.roleid, req.params.id];
    con.query("UPDATE profile SET emailId=? , isEmailVarified=? where userid = ?", data, (err, result, fields) => {
        if (err) throw err
        res.send(result);
    })
})
// put mobile
app.put("/put/verifymobile/:userid", (req, res) => {
    console.log(req.params.name)
    const data = [req.body.primaryContact, req.body.isContactVarified, req.params.userid];
    con.query("UPDATE profile SET primaryContact = ? , isContactVarified = ? where userid = ?", data, (err, result, fields) => {
        if (err) throw err
        res.send(result);
    })
})
// delete
// app.delete("/delete/generalinfo/:id", (req, res) => {
//     con.query("DELETE FROM profile WHERE userid = ?", req.params.id, (error, result) => {
//         if (error) throw error;
//         res.send(result)
//     })
// })
// profile api end-------------------
