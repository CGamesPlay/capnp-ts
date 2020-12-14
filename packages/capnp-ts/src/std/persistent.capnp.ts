/* tslint:disable */

/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */

import * as capnp from "../index";
import { ObjectSize as __O, Struct as __S, Interface as __I } from '../index';
export const _capnpFileId = "b8630836983feed7";
export class Persistent_SaveParams extends __S {
    static readonly _capnp = { displayName: "SaveParams", id: "f76fba59183073a5", size: new __O(0, 1) };
    adoptSealFor(value: capnp.Orphan<capnp.Pointer>): void { __S.adopt(value, __S.getPointer(0, this)); }
    disownSealFor(): capnp.Orphan<capnp.Pointer> { return __S.disown(this.getSealFor()); }
    getSealFor(): capnp.Pointer { return __S.getPointer(0, this); }
    hasSealFor(): boolean { return !__S.isNull(__S.getPointer(0, this)); }
    setSealFor(value: capnp.Pointer): void { __S.copyFrom(value, __S.getPointer(0, this)); }
    toString(): string { return "Persistent_SaveParams_" + super.toString(); }
}
export class Persistent_SaveResults extends __S {
    static readonly _capnp = { displayName: "SaveResults", id: "b76848c18c40efbf", size: new __O(0, 1) };
    adoptSturdyRef(value: capnp.Orphan<capnp.Pointer>): void { __S.adopt(value, __S.getPointer(0, this)); }
    disownSturdyRef(): capnp.Orphan<capnp.Pointer> { return __S.disown(this.getSturdyRef()); }
    getSturdyRef(): capnp.Pointer { return __S.getPointer(0, this); }
    hasSturdyRef(): boolean { return !__S.isNull(__S.getPointer(0, this)); }
    setSturdyRef(value: capnp.Pointer): void { __S.copyFrom(value, __S.getPointer(0, this)); }
    toString(): string { return "Persistent_SaveResults_" + super.toString(); }
}
export class Persistent_SaveResults$Promise {
    pipeline: capnp.Pipeline<any, any, Persistent_SaveResults>;
    constructor(pipeline: capnp.Pipeline<any, any, Persistent_SaveResults>) {
        this.pipeline = pipeline;
    }
    async promise(): Promise<Persistent_SaveResults> {
        return await this.pipeline.struct();
    }
}
export class Persistent$Client {
    client: capnp.Client;
    static readonly interfaceId: capnp.Uint64 = capnp.Uint64.fromHexString("c8cb212fcd9f5691");
    constructor(client: capnp.Client) {
        this.client = client;
    }
    static readonly methods: [
        capnp.Method<Persistent_SaveParams, Persistent_SaveResults>
    ] = [
        {
            ParamsClass: Persistent_SaveParams,
            ResultsClass: Persistent_SaveResults,
            interfaceId: Persistent$Client.interfaceId,
            methodId: 0,
            interfaceName: "packages/capnp-ts/src/std/persistent.capnp:Persistent",
            methodName: "save"
        }
    ];
    save(paramsFunc?: (params: Persistent_SaveParams) => void): Persistent_SaveResults$Promise {
        const answer = this.client.call({
            method: Persistent$Client.methods[0],
            paramsFunc: paramsFunc
        });
        const pipeline = new capnp.Pipeline(Persistent_SaveResults, answer);
        return new Persistent_SaveResults$Promise(pipeline);
    }
}
capnp.Registry.register(Persistent$Client.interfaceId, Persistent$Client);
export interface Persistent$Server$Target {
    save(params: Persistent_SaveParams, results: Persistent_SaveResults): Promise<void>;
}
export class Persistent$Server extends capnp.Server {
    readonly target: Persistent$Server$Target;
    constructor(target: Persistent$Server$Target) {
        super(target, [
            {
                ...Persistent$Client.methods[0],
                impl: target.save
            }
        ]);
        this.target = target;
    }
    client(): Persistent$Client { return new Persistent$Client(this); }
}
export class Persistent extends __I {
    static readonly SaveParams = Persistent_SaveParams;
    static readonly SaveResults = Persistent_SaveResults;
    static readonly Client = Persistent$Client;
    static readonly Server = Persistent$Server;
    static readonly _capnp = { displayName: "Persistent", id: "c8cb212fcd9f5691", size: new __O(0, 0) };
    toString(): string { return "Persistent_" + super.toString(); }
}
export class RealmGateway_Import$Params extends __S {
    static readonly _capnp = { displayName: "import$Params", id: "f0c2cc1d3909574d", size: new __O(0, 2) };
    getCap(): Persistent$Client { return new Persistent$Client(__S.getInterfaceClientOrNullAt(0, this)); }
    setCap(value: Persistent$Client): void { __S.setInterfacePointer(this.segment.message.addCap(value.client), __S.getPointer(0, this)); }
    adoptParams(value: capnp.Orphan<Persistent_SaveParams>): void { __S.adopt(value, __S.getPointer(1, this)); }
    disownParams(): capnp.Orphan<Persistent_SaveParams> { return __S.disown(this.getParams()); }
    getParams(): Persistent_SaveParams { return __S.getStruct(1, Persistent_SaveParams, this); }
    hasParams(): boolean { return !__S.isNull(__S.getPointer(1, this)); }
    initParams(): Persistent_SaveParams { return __S.initStructAt(1, Persistent_SaveParams, this); }
    setParams(value: Persistent_SaveParams): void { __S.copyFrom(value, __S.getPointer(1, this)); }
    toString(): string { return "RealmGateway_Import$Params_" + super.toString(); }
}
export class RealmGateway_Export$Params extends __S {
    static readonly _capnp = { displayName: "export$Params", id: "ecafa18b482da3aa", size: new __O(0, 2) };
    getCap(): Persistent$Client { return new Persistent$Client(__S.getInterfaceClientOrNullAt(0, this)); }
    setCap(value: Persistent$Client): void { __S.setInterfacePointer(this.segment.message.addCap(value.client), __S.getPointer(0, this)); }
    adoptParams(value: capnp.Orphan<Persistent_SaveParams>): void { __S.adopt(value, __S.getPointer(1, this)); }
    disownParams(): capnp.Orphan<Persistent_SaveParams> { return __S.disown(this.getParams()); }
    getParams(): Persistent_SaveParams { return __S.getStruct(1, Persistent_SaveParams, this); }
    hasParams(): boolean { return !__S.isNull(__S.getPointer(1, this)); }
    initParams(): Persistent_SaveParams { return __S.initStructAt(1, Persistent_SaveParams, this); }
    setParams(value: Persistent_SaveParams): void { __S.copyFrom(value, __S.getPointer(1, this)); }
    toString(): string { return "RealmGateway_Export$Params_" + super.toString(); }
}
export class RealmGateway$Client {
    client: capnp.Client;
    static readonly interfaceId: capnp.Uint64 = capnp.Uint64.fromHexString("84ff286cd00a3ed4");
    constructor(client: capnp.Client) {
        this.client = client;
    }
    static readonly methods: [
        capnp.Method<RealmGateway_Import$Params, Persistent_SaveResults>,
        capnp.Method<RealmGateway_Export$Params, Persistent_SaveResults>
    ] = [
        {
            ParamsClass: RealmGateway_Import$Params,
            ResultsClass: Persistent_SaveResults,
            interfaceId: RealmGateway$Client.interfaceId,
            methodId: 0,
            interfaceName: "packages/capnp-ts/src/std/persistent.capnp:RealmGateway",
            methodName: "import"
        },
        {
            ParamsClass: RealmGateway_Export$Params,
            ResultsClass: Persistent_SaveResults,
            interfaceId: RealmGateway$Client.interfaceId,
            methodId: 1,
            interfaceName: "packages/capnp-ts/src/std/persistent.capnp:RealmGateway",
            methodName: "export"
        }
    ];
    import(paramsFunc?: (params: RealmGateway_Import$Params) => void): Persistent_SaveResults$Promise {
        const answer = this.client.call({
            method: RealmGateway$Client.methods[0],
            paramsFunc: paramsFunc
        });
        const pipeline = new capnp.Pipeline(Persistent_SaveResults, answer);
        return new Persistent_SaveResults$Promise(pipeline);
    }
    export(paramsFunc?: (params: RealmGateway_Export$Params) => void): Persistent_SaveResults$Promise {
        const answer = this.client.call({
            method: RealmGateway$Client.methods[1],
            paramsFunc: paramsFunc
        });
        const pipeline = new capnp.Pipeline(Persistent_SaveResults, answer);
        return new Persistent_SaveResults$Promise(pipeline);
    }
}
capnp.Registry.register(RealmGateway$Client.interfaceId, RealmGateway$Client);
export interface RealmGateway$Server$Target {
    import(params: RealmGateway_Import$Params, results: Persistent_SaveResults): Promise<void>;
    export(params: RealmGateway_Export$Params, results: Persistent_SaveResults): Promise<void>;
}
export class RealmGateway$Server extends capnp.Server {
    readonly target: RealmGateway$Server$Target;
    constructor(target: RealmGateway$Server$Target) {
        super(target, [
            {
                ...RealmGateway$Client.methods[0],
                impl: target.import
            },
            {
                ...RealmGateway$Client.methods[1],
                impl: target.export
            }
        ]);
        this.target = target;
    }
    client(): RealmGateway$Client { return new RealmGateway$Client(this); }
}
export class RealmGateway extends __I {
    static readonly Client = RealmGateway$Client;
    static readonly Server = RealmGateway$Server;
    static readonly _capnp = { displayName: "RealmGateway", id: "84ff286cd00a3ed4", size: new __O(0, 0) };
    toString(): string { return "RealmGateway_" + super.toString(); }
}
