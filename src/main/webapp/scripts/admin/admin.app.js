'use strict';

angular.module('idislike.admin', [
    'ngRoute',
    'idislike.cst',
    'truncate'
])
    .config(['$routeProvider', 'USER_ROLES',
        function ($routeProvider, USER_ROLES) {
            $routeProvider
                .when('/audits', {
                    templateUrl: 'views/admin/audits.html',
                    controller: 'AuditsController',
                    access: {
                        authorizedRoles: [USER_ROLES.admin]
                    }
                })
                .when('/docs', {
                    templateUrl: 'views/admin/docs.html',
                    access: {
                        authorizedRoles: [USER_ROLES.admin]
                    }
                })
                .when('/health', {
                    templateUrl: 'views/admin/health.html',
                    controller: 'HealthController',
                    access: {
                        authorizedRoles: [USER_ROLES.admin]
                    }
                })
                .when('/logs', {
                    templateUrl: 'views/admin/logs.html',
                    controller: 'LogsController',
                    resolve: {
                        resolvedLogs: ['LogsService', function (LogsService) {
                            return LogsService.findAll();
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.admin]
                    }
                })
                .when('/metrics', {
                    templateUrl: 'views/admin/metrics.html',
                    controller: 'MetricsController',
                    access: {
                        authorizedRoles: [USER_ROLES.admin]
                    }
                })
                .when('/person', {
                    templateUrl: 'views/admin/persons.html',
                    controller: 'PersonController',
                    resolve:{
                        resolvedPerson: ['Person', function (Person) {
                            return Person.query().$promise;
                        }]
                    },
                    access: {
                        authorizedRoles: [USER_ROLES.admin]
                    }
                });
        }]);