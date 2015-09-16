var SecondModule;
(function (SecondModule) {
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(SecondModule.Color || (SecondModule.Color = {}));
    var Color = SecondModule.Color;
})(SecondModule || (SecondModule = {}));
