import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas' // nombre que usaremos como pipe ejemplo: {{ 'hola' | mayusculas}}
})
export class MayusculasPipe implements PipeTransform {
    transform(valor: string, enMayusculas: boolean): string {
        return (enMayusculas) 
                ? valor.toUpperCase() 
                : valor.toLowerCase();
    }
}