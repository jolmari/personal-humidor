import {Injectable} from "@angular/core";
import {NgForm} from "@angular/forms";

@Injectable()
export class FormHelpers {

    logFormStatusAndValues(form:NgForm) {
        form.statusChanges
            .filter(valid => valid === "VALID")
            .withLatestFrom(form.valueChanges,
            (valid, value) => value)
            .subscribe(value => console.log(JSON.stringify(value)));
    }

    onValueChanged(formRef:NgForm, formErrors:any, validationMessages:any) {

        if (!formRef) {
            return;
        }

        const form = formRef.form;

        for (const field in formErrors) {

            // clear field errors
            formErrors[field] = "";
            const control = form.get(field);

            // check control input validity
            if (control && control.dirty && !control.valid) {

                // get field related errors messages
                const messages = validationMessages[field];

                for (const key in control.errors) {

                    const error = control.errors[key];
                    const errorMessage = messages[key];

                    if (errorMessage) {

                        var errorArgumentKey = errorMessage.field;
                        var errorArgumentValue = error[errorArgumentKey];
                        var errorText: string = errorMessage.message;

                        formErrors[field] += errorArgumentValue
                            ? errorText.replace("{value}", errorArgumentValue)
                            : errorText;
                    }
                }
            }
        }
    }


}