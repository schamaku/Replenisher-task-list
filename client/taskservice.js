/*
http requests made to the node server
*/
(function () {
    'use strict';

    angular
        .module('tasklist')
        .service('taskService', taskService);

    taskService.$inject = ['$http', '$q'];

    function taskService($http, $q) {
        var self = this;

        self.getAllTasks = getAllTasks;
        self.updateStatus = updateStatus;
        self.addNewTask = addNewTask;


        function getAllTasks() {
            return $http.get('http://localhost:3000/task')
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    return $q.reject(error.statusCode);
                });
        }

        function addNewTask(task) {
            console.log(task);
            var p = JSON.stringify(task);

            return $http.post("http://localhost:3000/task/" + p)
                .then(function (data) {
                    return data;
                })
                .catch(function (error) {
                    console.log(error);
                })

        }

        function updateStatus(task) {
            console.log(JSON.stringify(task));
            var url = 'http://localhost:3000/task/' + JSON.stringify(task);

            var data = {
                "name": task.taskname,
                "description": task.description,
                "status": task.status,
                "priority": task.priority,
                "time": task.time,
                "person":task.person
            }

            return $http.put(url)
                .then(function (response) {
                    return response;
                }, function (error) {
                    return $q.reject(error.statusCode);
                });
        }
    }
})();
