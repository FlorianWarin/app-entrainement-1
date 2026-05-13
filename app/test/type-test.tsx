"use client"
import test from "./type-class"

var monMessage = 'test de msg'
var monBoolean = true

type tesPropsBis = {
    p: boolean
}

const props = {
    valeur1: monMessage,
    p: monBoolean,
}

var truc = new test<tesPropsBis>(props)

export default function TestComponents() {
    return (
        <div>
            {truc.autreTest()}
        </div>
    )
}