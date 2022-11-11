interface IChampion {
    version: string;
    id:      string;
    key:     string;
    name:    string;
    title:   string;
    blurb:   string;
    info:    Info;
    image:   Image;
    tags:    string[];
    partype: string;
    stats:   { [key: string]: number };
}

export interface Image {
    full:   string;
    sprite: string;
    group:  string;
    x:      number;
    y:      number;
    w:      number;
    h:      number;
}

export interface Info {
    attack:     number;
    defense:    number;
    magic:      number;
    difficulty: number;
}

export default IChampion;