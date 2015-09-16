var FirstModule;
(function (FirstModule) {
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(FirstModule.Color || (FirstModule.Color = {}));
    var Color = FirstModule.Color;
})(FirstModule || (FirstModule = {}));
