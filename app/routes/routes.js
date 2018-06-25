/**
@route handlers to create new tasks, updating existing task,
@retrieving existing tasks
*/
module.exports = function (app, db) {

    app.get('/task', (req, res) => {

        db.collection('todolist').find().toArray((err, item) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(item);
                console.log('passed in all');
            }
        });

    });

    app.put('/task/:id', (req, res) => {
        var id1 = JSON.parse(req.params.id);

        const details = {
            'taskname': id1.taskname
        };

        const taskUpdate = {
            "taskname": id1.taskname,
            "description": id1.description,
            "priority": id1.priority,
            "time": id1.time,
            "status": id1.status,
            "person": id1.person
        };

        console.log(taskUpdate);

        db.collection('todolist').update(details, taskUpdate, (err, result) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                console.log('passed');
                res.send(taskUpdate);
                //console.log(taskUpdate);
            }
        });
    });

    app.post('/task/:data', (req, res) => {
        var param = req.params.data;

        console.log("Param is " + param);

        var param1 = JSON.parse(param);
        const task1 = {
            taskname: param1.taskname,
            priority: param1.priority,
            time: param1.time,
            status: param1.status,
            description: param1.description,
            person: param1.person
        };

        db.collection('todolist').insert(task1, (err, results) => {
            if (err) {
                res.send({
                    'error': 'An error has occurred'
                });
            } else {
                res.send(results.ops[0]);
                console.log('success');
            }
        });
    });


};
