import path from "path"
import typescript from "@rollup/plugin-typescript"

export default {
    input: path.resolve(__dirname, "../src/index.ts"),
    output: {
        dir: "build",
        format: "cjs"
    },
    plugins: [typescript({
        tsconfig: path.resolve(__dirname, "../tsconfig.json")
    })]
}