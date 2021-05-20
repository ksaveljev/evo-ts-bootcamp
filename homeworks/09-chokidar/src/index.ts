import { EventEmitter } from "events";

import { DirWatcher } from "./dirwatcher";
import { Importer } from "./importer";

const eventEmitter = new EventEmitter();
const dirWatcher = new DirWatcher(eventEmitter);
const importer = new Importer(eventEmitter);

importer.listen(); // importer first, so we can catch events for the already existing files
dirWatcher.watch("./data"); // data folder must be present from where the app is started
