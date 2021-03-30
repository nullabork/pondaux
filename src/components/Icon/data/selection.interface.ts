export interface IFontSelection {
    IcoMoonType: string;
    icons: Icon2[];
    height: number;
    metadata: Metadata;
    preferences: Preferences;
}

interface Preferences {
    showGlyphs: boolean;
    showQuickUse: boolean;
    showQuickUse2: boolean;
    showSVGs: boolean;
    fontPref: FontPref;
    imagePref: ImagePref;
    historySize: number;
    showCodes: boolean;
    gridSize: number;
}

interface ImagePref {
    prefix: string;
    png: boolean;
    useClassSelector: boolean;
    color: number;
    bgColor: number;
    classSelector: string;
}

interface FontPref {
    prefix: string;
    metadata: Metadata2;
    metrics: Metrics;
    embed: boolean;
    showMetrics: boolean;
    showMetadata: boolean;
    showVersion: boolean;
    noie8: boolean;
    ie7: boolean;
    showSelector: boolean;
}

interface Metrics {
    emSize: number;
    baseline: number;
    whitespace: number;
}

interface Metadata2 {
    fontFamily: string;
    majorVersion: number;
    minorVersion: number;
}

interface Metadata {
    name: string;
}

interface Icon2 {
    icon: Icon;
    properties: Properties;
    setIdx: number;
    setId: number;
    iconIdx: number;
}

interface Properties {
    id: number;
    order: number;
    prevSize: number;
    code: number;
    name: string;
}

interface Icon {
    paths: string[];
    width: number;
    isMulticolor: boolean;
    isMulticolor2: boolean;
    tags: string[];
    grid: number;
}
