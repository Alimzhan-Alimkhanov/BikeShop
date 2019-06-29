import { Inject, Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(error => {
                if(error instanceof HttpErrorResponse)
                {
                    if(error.status == 401)
                    {
                        return throwError(error.statusText);
                    }
                
                    const applicationError = error.headers.get("Application-Error");
                    if(applicationError)
                    {
                        console.error(applicationError);
                        return throwError(applicationError);
                    }

                    const serverError = error.error;
                    let modalStateErrors = '';
                    if(serverError && typeof serverError == 'object')
                    {
                        for(const key in serverError){
                            if(serverError[key])
                            {
                                modalStateErrors += serverError[key] + '\n';
                            }
                        }
                    }
                    
                    return throwError(modalStateErrors||serverError||"Server Error");

                }
            })
        )
    }
}

export const ErrorInterceptorProvider = {
     // Add an additional http interceptor to the existing Angular array
  // of http interceptors
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  // Set to true since we don't want to replace this to our existing Angular array
  // of interceptors but we need to add it.
  multi: true
}


//Intercepor - перехватчики можно добавлять http загаловки