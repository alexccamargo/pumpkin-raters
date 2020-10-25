export const debug = (obj, text)  => {
    console.log("\x1b[31m", `[${text ? text: "debug"}]:`,"\x1b[0m",obj);
    return obj;
}
