import {Injectable} from "@angular/core";

@Injectable()
export class EnvironmentService {
    private apiServerUrl: string = "http://localhost:55396";

    getApiBase(): string {
        return this.apiServerUrl;
    }
};