
// This implementaion was copied from:
// https://stackoverflow.com/questions/30174078/how-to-define-singleton-in-typescript
class GlobalCounter
{
    private static instance: GlobalCounter;
    private count:number = 0;

    private constructor()
    {
        //...
    }

    public static get Instance()
    {
        return this.instance || (this.instance = new this());
    }

    public getCount(): number {
        return this.count;
    }

    public increment() {
        this.count++;
    }
}

export default GlobalCounter;
