(function (window, $) {
    var app = function () {

        var _scope = {},
            _privateScope = {},
            _config = {};

        _config = {
            classes: {
                caretUp: 'oi-caret-up',
                caretDown: 'oi-caret-bottom',
                hiddenElement: 'hidden'
            },
            selectors: {
                sectionHeader: '.sidebar .section-header'
            }
        };


        _scope.enableSidebarListeners = function () {
            $(_config.selectors.sectionHeader).click(function (e) {
                var _this = $(this);

                _this.parent('li').find('ul').toggleClass(_config.classes.hiddenElement);
            });
        };

        _scope.init = function () {
            _scope.enableSidebarListeners();
        };

        return _scope;

    };

    if (window.App === undefined) {
        window.App = app();
    }
})(window, $);