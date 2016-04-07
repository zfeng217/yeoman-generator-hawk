/**
 * Created by <%= authorName %> on <%= nowDate %>.
 */
define(
    [
        'lib'
    ],
    function (Lib) {
        var $ = Lib.$,
            angular = Lib.angular;
        return function () {
            angular.module('<%= moduleName %>')
                .service('<%= serviceName %>Service', [
                    function () {

                    }
                ]);
        }
    }
);