export class User_Photo {
    id: number;
    name: string;
    path: string;
    userId: number;
    user?: any

    constructor(path: string) {
        this.path = path;
      }


}
