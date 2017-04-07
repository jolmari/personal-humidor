export class Serializable<T> {

    public fromJson(json: Object): T {
        return Object.getOwnPropertyNames(this)
            .reduce((acc: any, key: string) => {
                acc[key] = json[key];
                return acc;
            }, {});
    }
}
