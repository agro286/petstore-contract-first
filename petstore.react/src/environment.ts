interface AppConfig {
    [key: string]: string | number | undefined,

    basePath: string,
    contextPath: string
}

export const config: AppConfig = {basePath: '', contextPath: ''};
Object.keys(process.env).forEach((key: string) => {
    let key2 = key;
    if (key.startsWith('REACT_APP_')) {
        key2 = key.substr('REACT_APP_'.length);
    }
    config[key2] = process.env[key];
});
Object.freeze(config);
