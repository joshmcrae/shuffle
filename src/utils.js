export const find = (arr, func) => {
    let item = null

    arr.forEach(i => {
        if (func(i)) {
            item = i
        }
    })

    return item
}
