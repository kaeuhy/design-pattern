import {UIFactory} from "./factory/UIFactory";
import {DarkUIFactory} from "./factory/DarkUIFactory";
import {LightUIFactory} from "./factory/LightUIFactory";
import {Application} from "./Application";

const currentTheme: 'light' | 'dark' = 'dark';

let factory: UIFactory;

if (currentTheme === 'dark') {
    factory = new DarkUIFactory();
} else {
    factory = new LightUIFactory();
}

const app = new Application(factory);

app.createUI();
app.displayUI();