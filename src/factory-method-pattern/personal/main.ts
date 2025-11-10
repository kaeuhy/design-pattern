// client

// 모드를 다크로 설정
import {Application} from "./app/Application";
import {DarkApplication} from "./app/DarkApplication";
import {LightApplication} from "./app/LightApplication";

const currentTheme: 'light' | 'dark' = 'dark';

let app: Application;

if (currentTheme === 'dark') {
    console.log("다크 모드");
    app = new DarkApplication();
} else {
    console.log("라이트 모드");
    app = new LightApplication();
}

app.renderElement('button');
app.renderElement('alert');