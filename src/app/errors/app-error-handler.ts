import { AppBadRequestError } from './app-bad-request-error';
import { AppNotFoundError } from './app-not-found-error';
import { AppErrors } from './app-errors';
import { ErrorHandler } from "@angular/core";

export class AppErrorHandler extends ErrorHandler {
    handleError(error:AppErrors){
        if(error instanceof AppNotFoundError){
            alert("404 Not Found..")
        }
        else if(error instanceof AppBadRequestError){
            alert("Improper Request..");
        }
        else{
            alert("Unknown error occured..");
        }
    }
}