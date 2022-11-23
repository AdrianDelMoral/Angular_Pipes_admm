import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform {

    transform(valor: string): string {
        return valor 
            ? 'vuela' 
            : 'no vuela';
    }

}