/**
 * Created by <%= authorName %> on <%= nowDate %>.
 */
define(
    [
        'lib',
    ],
    function (Lib) {
        var $ = Lib.$,
            angular = Lib.angular;
        return function () {
            angular.module('<%= moduleName %>')
                .service('<%= moduleName %>Service', ['<%= moduleName %>Repository',
                    function (<%= moduleName %>Repository) {
                        

                        // 离开该路由前执行清理工作
                        $scope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                            // TODO 清理工作
                        });

                    }
                ]);
        }
    }
);