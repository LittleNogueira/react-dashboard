import validator from 'validator';

class FormValidator{
    constructor(validations){
        this.validations = validations;
    }

    isValid = state => {
        const valid = this._default();
        this.validations.forEach(validation => {
            const method = validator[validation.method];
            const value = state[validation.field];
            
            const isValid = method(value) === validation.validWhen;

            valid[validation.field] = {isValid: isValid, message: isValid ? '' : validation.message};

            if(!isValid){
                valid.isValid = false;
            }
        });

        return valid;
    }

    _default = () =>{

        const validationsAux = [];

        this.validations.forEach(validation => {
            return validationsAux[validation.field] = {isValid: true, message: ''};
        });

        return {...validationsAux,isValid:true};
    }
}

export default FormValidator;
