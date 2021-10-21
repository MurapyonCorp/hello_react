/*
◎アンビエント宣言(Ambient Declarations)
　既存のJavaScriptモジュールに型情報を付加する形の宣言。通常の宣言と区別して使う。
*/
declare class Brooch {
    pentagram: string;
}
declare type Compact = {
    silverCrystal: boolean;
};
declare class CosmicCompact implements Compact {
    silverCrystal: boolean;
    cosmicPower: boolean;
}
declare class CrisisCompact implements Compact {
    silverCrystal: boolean;
    moonChalice: boolean;
}
declare function transform(): void;
declare function transform(item: Brooch): void;
declare function transform(item: Compact): void;
export { transform, Brooch, CosmicCompact, CrisisCompact };
