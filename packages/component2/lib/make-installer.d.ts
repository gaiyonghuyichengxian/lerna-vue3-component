import type { App, Plugin } from 'vue';
declare const makeInstaller: (components?: Plugin[]) => {
    install: (app: App, opts: any) => void;
};
export default makeInstaller;
