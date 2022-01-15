const objFactory = param => {
    return {
        _param: param, //used underscore in the property so that it cannot be changed directly from outside
        get param() {
          return this._param;
        },
        set param(paramOfParam) {
          return this._param = paramOfParam;
        },
        aMethod() {
            return "This method ran!"
        }
    }
}
exampleObj = objFactory("example");
exampleObj.aMethod(); //returns "This method ran!"