import { Question } from "@serenity-js/core";
// @ts-ignore
import Fakerator from 'fakerator';


var fakerator = Fakerator("es-AR");

const getData = () => {
    const res =  {
        "email": fakerator.internet.email("autom"+fakerator.names.firstName(), fakerator.names.lastName(), 'wolox.com.ar'),
        "password": "123"+fakerator.internet.password(10),
        "firstName": 'autom',
        "lastName": "Wolox"
    }
    return res;
}

export const GetRegisterData = (): Question<any> => 
    Question.about(`#the data of the request`, () => getData());