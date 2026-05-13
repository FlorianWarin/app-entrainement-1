import React from "react"

export type TestProps = {
    valeur1 : string,
}

interface HasArg {
    p?: any
}

export default class test<P extends HasArg = {}> extends React.Component<P & TestProps> {

    static testFunc(m : string) : void {
        console.log(m)
    }

    public autreTest() : string {
        if (this.props.p) {
            return "C'est vrai"
        }
        else {
            return "C'est faux"
        }
    }

}