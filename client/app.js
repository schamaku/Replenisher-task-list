/**
@controller of the views 
*/
(function () {
    'use strict';

    var app = angular.module('tasklist', []);
    app.controller('formController', formController);

    formController.$inject = ['taskService'];

    function formController(taskService) {
        var formCtrlVm = this;

        formCtrlVm.addTask = function () {
            console.log("addTask");

            formCtrlVm.task = {
                taskname: formCtrlVm.taskName,
                priority: formCtrlVm.priority,
                time: formCtrlVm.time,
                status: formCtrlVm.status,
                description: formCtrlVm.description,
                person: formCtrlVm.person
            };

            taskService.addNewTask(formCtrlVm.task)
                .then(function (res) {
                    console.log("response in app");
                    formCtrlVm.getAllTasks();

                }).catch(function (error) {
                    console.log("error in app");
                })


            formCtrlVm.taskName = "";
            formCtrlVm.priority = "";
            formCtrlVm.time = "";
            formCtrlVm.status = "";
            formCtrlVm.description = "";
            formCtrlVm.person= "";
        };


        formCtrlVm.getAllTasks = function () {
            taskService.getAllTasks()
                .then(function (res) {
                    console.log("got all tasks");
                    formCtrlVm.list = res;

                })
                .catch(function (error) {
                    console.log("error getting all tasks");
                })
        }

        formCtrlVm.updateStatus = function (task) {
            console.log("In app update " + JSON.stringify(task));
            taskService.updateStatus(task)
                .then(function (res) {
                    console.log('Succesfully updated');
                    formCtrlVm.getAllTasks();
                })
                .catch(function (error) {
                    console.log("error is updating the status");
                })
        }

    }
})();
