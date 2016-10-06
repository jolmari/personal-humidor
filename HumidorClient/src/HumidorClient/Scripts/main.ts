import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import "ts-helpers";

import {AppModule} from "./modules/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);