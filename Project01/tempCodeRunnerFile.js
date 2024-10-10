app.delete("/users/id", (res,req)=>{
    const idd = Number(req.params.id);
    const us = user.find(u => {return u.id === idd});
   // console.log(us)
    user.pop(us);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(user), (req, re)=>{
        res.json({status: "completed"})
    })

})